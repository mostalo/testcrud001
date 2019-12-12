import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class TestsqlService {
  base_path = 'https://localhost/00crud/products/';

  constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    // Handle API errors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Ocorreu um erro no cliente ou na rede.
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // O back-end retornou um código de resposta sem êxito.
      // O corpo da resposta pode conter pistas sobre o que deu errado.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  public selectProducts(): Observable<Product> {
    return this.http
      .get<Product>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Customer } from '../model/customer';
//import { map } from 'rxjs/operator/map';
//import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'enctype': 'multipart/formdata',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TstService {

  server = "http://localhost/testapi/"

  constructor( public http: HttpClient) { }

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

postData(body: any, file: any): Observable<Customer> {
  
  return this.http.post<Customer>(this.server + file, JSON.stringify(body), 
  httpOptions)
  .pipe(retry(2)
  ,catchError(this.handleError))
}
/*
postData(body, file){
  //let type = "application/json; charset=UTF-8";
  //let headers = new Headers({ 'Content-Type': type });
  //let options = new RequestOptions({ headers: headers });

  return this.http.post(this.server + file, JSON.stringify(body))
  //.map(res => res.json());
  .pipe(map((response: any) => response.json()));
}
*/


}

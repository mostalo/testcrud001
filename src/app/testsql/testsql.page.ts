import { Component, OnInit } from '@angular/core';
import {  TestsqlService } from '../services/testsql.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testsql',
  templateUrl: './testsql.page.html',
  styleUrls: ['./testsql.page.scss'],
})
export class TestsqlPage implements OnInit {

  products: Product;

  constructor(private prdservice: TestsqlService, private router: Router) { }

  ngOnInit(): void {
    this.Productlist();
  }

  Productlist() {
    //Get saved list of students
    this.prdservice.selectProducts().subscribe(response => {
      console.log(response);
      this.products = response;
    })
  }

}

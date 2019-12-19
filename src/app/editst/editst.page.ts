import { Component, OnInit } from '@angular/core';
import { TstService } from '../services/tst.service';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Customer } from '../model/customer';
import {NavParams, ModalController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
//import { map } from 'rxjs/operator/map';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-editst',
  templateUrl: './editst.page.html',
  styleUrls: ['./editst.page.scss'],
})
export class EditstPage implements OnInit {
  products: Customer;
  public idval = this.navParams.get('idval');
  public namval = this.navParams.get('namval');
  public desval = this.navParams.get('desval');
  customerForm: FormGroup;

  constructor(private navParams: NavParams, private tstservice: TstService, private modalcontroller: ModalController, private formbuilder: FormBuilder) {
    
  }

  ngOnInit() {
    //console.log(this.idval + " == "+ this.namval+ " == "+ this.desval);
    //this.loadCostumer();
    let body = {
      action: 'getdataid',
      id: this.idval
    };
    this.tstservice.postData(body, 'api.php').pipe(map( resp => {
      //Response.json();
       //return response;
       //return resp;
       this.products = resp;
       console.log(this.products.desc_customer);
       
     }));

    //console.log("problem undef : " + gfh);
  this.customerForm = this.formbuilder.group({
    name_customer: new FormControl(this.namval, Validators.compose([
      
      Validators.maxLength(25),
      Validators.minLength(5),
      //Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      Validators.required
    ])),
    desc_customer: new FormControl(this.desval, Validators.compose([
      
      Validators.maxLength(25),
      Validators.minLength(5),
      //Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      Validators.required
    ]))
  });
  
  }
  closeModal(){
    this.modalcontroller.dismiss();
  }
/*
  loadCostumer() {
    let body = {
      action: 'getdataid',
      id: this.idval
    };
    
   let yfy = this.tstservice.postData(body, 'api.php').subscribe(response => {
    
     // return response[0];
      console.log(response[0].name_customer);
      //return response[0].name_customer;
      
    });
    console.log("====" +yfy);
    //console.log("this result : " + gdf);
    //this.products = Response[0];
    //console.log("name  = " + this.products.name_customer + " -- desc = "+ this.products.desc_customer);
  }
  */
 /* loadCostumer() {
    let body = {
      action: 'getdataid',
      id: this.idval
    };
    
    this.tstservice.postData(body, 'api.php').subscribe(response => {
    
      return response;
      console.log("name  = " + this.products.name_customer + " -- desc = "+ this.products.desc_customer);
      
    });
    console.log(Response);
    //this.products = Response[0];
    //console.log("name  = " + this.products.name_customer + " -- desc = "+ this.products.desc_customer);
  }
*/
  updateProduct(values : any){

    
    let body = {
      action: 'update',
      name_customer: values.name_customer,
      desc_customer: values.desc_customer
    };
    
    this.tstservice.postData(body, 'api.php').subscribe(() => {
      this.modalcontroller.dismiss();
    });
}

}

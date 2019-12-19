import { Component, OnInit } from '@angular/core';
import { TstService } from '../services/tst.service';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Customer } from '../model/customer';
import {NavParams, ModalController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-editst',
  templateUrl: './editst.page.html',
  styleUrls: ['./editst.page.scss'],
})
export class EditstPage implements OnInit {
  products: Customer;
  public value = this.navParams.get('value');
  customerForm: FormGroup;

  constructor(private navParams: NavParams, private tstservice: TstService, private modalcontroller: ModalController, private formbuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.loadCostumer();
    console.log("problem undef : " +this.products);
  this.customerForm = this.formbuilder.group({
    name_customer: new FormControl('', Validators.compose([
      
      Validators.maxLength(25),
      Validators.minLength(5),
      //Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      Validators.required
    ])),
    desc_customer: new FormControl('', Validators.compose([
      
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
  
  loadCostumer() {
    let body = {
      action: 'getdataid',
      id: this.value
    };
    
    this.tstservice.postData(body, 'api.php').subscribe(response => {
    
      this.products = response[0];
      console.log("name  = " + this.products.name_customer + " -- desc = "+ this.products.desc_customer);
      
    })
    return this.products;
  }

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

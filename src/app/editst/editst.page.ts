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
import { promise } from 'protractor';
import { resolve } from 'url';

@Component({
  selector: 'app-editst',
  templateUrl: './editst.page.html',
  styleUrls: ['./editst.page.scss'],
})
export class EditstPage implements OnInit {
  
  products: Customer;
  public idval = this.navParams.get('idval');
  customerForm: FormGroup;

  constructor(private navParams: NavParams, private tstservice: TstService, private modalcontroller: ModalController, private formbuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.loadCostumer();
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
      id: this.idval
    };
    
    return this.tstservice.postData(body, 'api.php').subscribe((data: any) => {
      
     this.customerForm.setValue({
      name_customer: data[0].name_customer,
      desc_customer: data[0].desc_customer
      });
    });
  }
  updateProduct(values : any){
    
    let body = {
      action: 'update',
      id: this.idval,
      name_customer: values.name_customer,
      desc_customer: values.desc_customer
    };
    
    this.tstservice.postData(body, 'api.php').subscribe(() => {
      this.modalcontroller.dismiss();
    });
}

}

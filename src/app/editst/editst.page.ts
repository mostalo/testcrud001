import { Component, OnInit } from '@angular/core';
import { TstService } from '../services/tst.service';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Customer } from '../model/customer';
import {NavParams, ModalController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editst',
  templateUrl: './editst.page.html',
  styleUrls: ['./editst.page.scss'],
})
export class EditstPage implements OnInit {
  products: Customer;
  id : any;
  tst: any;
  name_customer : string;
  public value = this.navParams.get('value');
  customerForm: FormGroup;
  productID: number;
  //public customer_id: number = ;

  constructor(private navParams: NavParams, private tstservice: TstService, private modalcontroller: ModalController, private formbuilder: FormBuilder) {}

  ngOnInit() {
    
   this.loadCostumer();
  console.log(this.products.name_customer);
    //console.log(this.value);
   /* this.customerForm = this.formbuilder.group({
      name_customer: new FormControl(this.value, Validators.compose([
        
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
    */
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
      console.log(response);
     // let dfdg = response.map(res => res.json());
      //console.log(this.products.id);
      //this.id = response.id;
      //this.name_customer = response.name_customer;
    });
    
  // this.tstservice.postData(body, 'api.php').map(res => res.json())
  }

}

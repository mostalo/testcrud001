import { Component, OnInit } from '@angular/core';
import { TstService } from '../services/tst.service';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Customer } from '../model/customer';
import {NavParams, ModalController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addtst',
  templateUrl: './addtst.page.html',
  styleUrls: ['./addtst.page.scss'],
})
export class AddtstPage implements OnInit {

  customerForm: FormGroup;
  products: Customer;
  productID: number;

  constructor(private navpaams: NavParams, private modalcontroller: ModalController, public formbuilder: FormBuilder, private tstservice: TstService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
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
  addProduct(values : any){

    
    let body = {
      action: 'add',
      name_customer: values.name_customer,
      desc_customer: values.desc_customer
    };
    
    this.tstservice.postData(body, 'api.php').subscribe(() => {
      this.modalcontroller.dismiss();
    });
}
}

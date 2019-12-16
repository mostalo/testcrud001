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
  editable: boolean = false;

  constructor(private navpaams: NavParams, private modalcontroller: ModalController, public formbuilder: FormBuilder, private tstservice: TstService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customerForm = this.formbuilder.group({
      //name_customer: new FormControl(),
      //desc_customer: new FormControl()
      name_customer: [
        '',
        [
          Validators.required, // validação de campo requirido
          Validators.minLength(4), // validação de minimo de caracteres
          Validators.maxLength(100), // validação de maximo de caracteres
        ]
      ],
      desc_customer: [
        '',
        [
          Validators.required, // validação de campo requirido
          Validators.minLength(4), // validação de minimo de caracteres
          Validators.maxLength(100), // validação de maximo de caracteres
        ]
      ]
    });

    this.route.paramMap.subscribe(params => {
      this.productID =+ params.get('id');
      if(this.productID) {
        this.getProduto(this.productID);
        this.editable = true;
      }
    })


  }

  closeModal(){
    this.modalcontroller.dismiss();
  }
  addProduct(){
    let body = {
      action: 'add',
      name_customer : this.products.name_customer,
      desc_customer : this.products.desc_customer
    };
    this.tstservice.postData(body, 'api.php').subscribe(data => {
      //this.router.navigate(['/customers']);
      //this.name_customer = ''
      //this.desc_customer = ''
      console.log('Ok');
    });

    //console.log(values);
    //this.router.navigate(["/user"]);
  }
  editProduct(values: any){
    console.log(values);
    //this.router.navigate(["/user"]);
  }

  getProduto(id: number) {
    console.log(id);
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { TstService } from '../services/tst.service';
//import { Storage } from '@ionic/stora';
import { ToastController } from '@ionic/angular';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-tst2',
  templateUrl: './tst2.page.html',
  styleUrls: ['./tst2.page.scss'],
})
export class Tst2Page implements OnInit {

  products: Customer;

  customers: any = [];
  limit: number = 10;
  start = 0;

  anggota: any
  username: string

  constructor(private router: Router, 
    private postProvider: TstService,
    private toastCtrl: ToastController,
    ) { }

  ngOnInit() {
    this.loadCostumer();
  }

  /*
  loadCostumer() {
    return new Promise(resolve => {
      
      let body = {
        action: 'getdata',
        limit: this.limit,
        start: this.start
      };
      this.postProvider.postData(body, 'api.php').subscribe(data => {
        if(data.result) {
          for(let customer of data.result) {
           this.customers.push(customer)
        }
        }
        
        resolve(true);
        
       console.log(data);
      });
    });
  }
*/
loadCostumer() {
    let body = {
      action: 'getdata',
      limit: this.limit,
      start: this.start
    };
    this.postProvider.postData(body, 'api.php').subscribe(response => {
      console.log(response);
      this.products = response;
    })
  }

}

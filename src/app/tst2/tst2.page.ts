import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { TstService } from '../services/tst.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Customer } from '../model/customer';
import { AddtstPage } from '../addtst/addtst.page';
import { EditstPage } from '../editst/editst.page';
import { async } from 'q';

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
    public modalcontroller: ModalController,
    ) { }

  ngOnInit() {
    this.loadCostumer();
  }
  
loadCostumer() {
    let body = {
      action: 'getdata',
      limit: this.limit,
      start: this.start
    };
    this.postProvider.postData(body, 'api.php').subscribe(response => {
      //console.log(response);
      this.products = response;
    })

  }

  deletecustomer(id) {
    let body = {
      action: 'delete',
      id: id
    };
    this.postProvider.postData(body, 'api.php').subscribe(data => {
      this.loadCostumer();
    });
  }

  async testadd(){
    const modal = await this.modalcontroller.create({
     component: AddtstPage
     
    });
      modal.onDidDismiss().then(() => {
        
        this.loadCostumer();

      });

      return await modal.present();
  }
 async editarProduto(id: number) {
  
  const modal = await this.modalcontroller.create({
    
    component: EditstPage,
    componentProps: { 
      idval : id

     }
  });
  
  modal.onDidDismiss().then(() => {
        
    this.loadCostumer();

  });
  return await modal.present();

}

  
}

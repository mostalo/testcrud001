import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-addtst',
  templateUrl: './addtst.page.html',
  styleUrls: ['./addtst.page.scss'],
})
export class AddtstPage implements OnInit {

  validations_form: FormGroup;

  constructor(private navpaams: NavParams, private modalcontroller: ModalController, public formbuilder: FormBuilder) { }

  ngOnInit() {
    this.validations_form = this.formbuilder.group({
      username: new FormControl()
    });
  }

  closeModal(){
    this.modalcontroller.dismiss();
  }
  onSubmit(values: any){
    console.log(values);
    //this.router.navigate(["/user"]);
  }

}

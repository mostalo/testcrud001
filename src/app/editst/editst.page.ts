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
  public value = this.navParams.get('value');

  constructor(private navParams: NavParams) {}

  ngOnInit() {
    console.log(this.value);
  }

}

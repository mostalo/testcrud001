import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtstPageRoutingModule } from './addtst-routing.module';

import { AddtstPage } from './addtst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddtstPageRoutingModule
  ],
  declarations: [AddtstPage]
})
export class AddtstPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditstPageRoutingModule } from './editst-routing.module';

import { EditstPage } from './editst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditstPageRoutingModule
  ],
  declarations: [EditstPage]
})
export class EditstPageModule {}

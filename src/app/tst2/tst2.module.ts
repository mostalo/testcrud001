import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tst2PageRoutingModule } from './tst2-routing.module';

import { Tst2Page } from './tst2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tst2PageRoutingModule
  ],
  declarations: [Tst2Page]
})
export class Tst2PageModule {}

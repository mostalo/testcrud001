import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestsqlPageRoutingModule } from './testsql-routing.module';

import { TestsqlPage } from './testsql.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestsqlPageRoutingModule
  ],
  declarations: [TestsqlPage]
})
export class TestsqlPageModule {}

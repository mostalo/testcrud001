import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtstPage } from './addtst.page';

const routes: Routes = [
  {
    path: '',
    component: AddtstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtstPageRoutingModule {}

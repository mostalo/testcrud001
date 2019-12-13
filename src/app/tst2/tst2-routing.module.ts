import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tst2Page } from './tst2.page';

const routes: Routes = [
  {
    path: '',
    component: Tst2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tst2PageRoutingModule {}

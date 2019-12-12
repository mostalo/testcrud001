import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsqlPage } from './testsql.page';

const routes: Routes = [
  {
    path: '',
    component: TestsqlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsqlPageRoutingModule {}

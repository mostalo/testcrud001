import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditstPage } from './editst.page';

const routes: Routes = [
  {
    path: '',
    component: EditstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditstPageRoutingModule {}

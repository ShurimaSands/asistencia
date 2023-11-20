import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsisprofPage } from './asisprof.page';

const routes: Routes = [
  {
    path: '',
    component: AsisprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsisprofPageRoutingModule {}

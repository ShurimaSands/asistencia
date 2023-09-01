import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsislistPage } from './asislist.page';

const routes: Routes = [
  {
    path: '',
    component: AsislistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsislistPageRoutingModule {}

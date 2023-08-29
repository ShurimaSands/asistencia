import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetpPage } from './resetp.page';

const routes: Routes = [
  {
    path: '',
    component: ResetpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetpPageRoutingModule {}

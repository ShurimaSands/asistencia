import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProfPage } from './home-prof.page';

const routes: Routes = [
  {
    path: '',
    component: HomeProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeProfPageRoutingModule {}

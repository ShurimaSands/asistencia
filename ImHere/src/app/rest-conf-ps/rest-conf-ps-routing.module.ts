import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestConfPsPage } from './rest-conf-ps.page';

const routes: Routes = [
  {
    path: '',
    component: RestConfPsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestConfPsPageRoutingModule {}

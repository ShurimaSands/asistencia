import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsisgPage } from './asisg.page';

const routes: Routes = [
  {
    path: '',
    component: AsisgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsisgPageRoutingModule {}

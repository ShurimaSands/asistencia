import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneraPage } from './genera.page';

const routes: Routes = [
  {
    path: '',
    component: GeneraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneraPageRoutingModule {}

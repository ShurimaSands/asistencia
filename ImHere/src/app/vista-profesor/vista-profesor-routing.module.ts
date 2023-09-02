import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaProfesorPage } from './vista-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: VistaProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaProfesorPageRoutingModule {}

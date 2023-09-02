import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaProfesorPageRoutingModule } from './vista-profesor-routing.module';

import { VistaProfesorPage } from './vista-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaProfesorPageRoutingModule
  ],
  declarations: [VistaProfesorPage]
})
export class VistaProfesorPageModule {}

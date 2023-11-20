import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsisprofPageRoutingModule } from './asisprof-routing.module';

import { AsisprofPage } from './asisprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsisprofPageRoutingModule
  ],
  declarations: [AsisprofPage]
})
export class AsisprofPageModule {}

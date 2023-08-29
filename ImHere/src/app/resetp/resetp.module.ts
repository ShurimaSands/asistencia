import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetpPageRoutingModule } from './resetp-routing.module';

import { ResetpPage } from './resetp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetpPageRoutingModule
  ],
  declarations: [ResetpPage]
})
export class ResetpPageModule {}

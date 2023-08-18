import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsisgPageRoutingModule } from './asisg-routing.module';

import { AsisgPage } from './asisg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsisgPageRoutingModule
  ],
  declarations: [AsisgPage]
})
export class AsisgPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneraPageRoutingModule } from './genera-routing.module';

import { GeneraPage } from './genera.page';
import {QRCodeModule} from "angularx-qrcode";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneraPageRoutingModule,
    QRCodeModule
  ],
  declarations: [GeneraPage]
})
export class GeneraPageModule {}

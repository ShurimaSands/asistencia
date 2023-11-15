import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeProfPageRoutingModule } from './home-prof-routing.module';
import { HomeProfPage } from './home-prof.page';
import {QRCodeModule} from "angularx-qrcode";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProfPageRoutingModule,
    QRCodeModule
  ],
  declarations: [HomeProfPage]
})
export class HomeProfPageModule {}

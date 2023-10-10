import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestConfPsPageRoutingModule } from './rest-conf-ps-routing.module';

import { RestConfPsPage } from './rest-conf-ps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestConfPsPageRoutingModule
  ],
  declarations: [RestConfPsPage]
})
export class RestConfPsPageModule {}

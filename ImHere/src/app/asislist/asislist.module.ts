import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsislistPageRoutingModule } from './asislist-routing.module';

import { AsislistPage } from './asislist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsislistPageRoutingModule
  ],
  declarations: [AsislistPage]
})
export class AsislistPageModule {}

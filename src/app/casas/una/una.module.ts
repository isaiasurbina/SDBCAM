import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnaPageRoutingModule } from './una-routing.module';

import { UnaPage } from './una.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnaPageRoutingModule
  ],
  declarations: [UnaPage]
})
export class UnaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormandoslevelPageRoutingModule } from './formandoslevel-routing.module';

import { FormandoslevelPage } from './formandoslevel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormandoslevelPageRoutingModule
  ],
  declarations: [FormandoslevelPage]
})
export class FormandoslevelPageModule {}

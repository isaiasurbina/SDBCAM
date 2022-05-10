import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormandoPageRoutingModule } from './formando-routing.module';

import { FormandoPage } from './formando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormandoPageRoutingModule
  ],
  declarations: [FormandoPage]
})
export class FormandoPageModule {}

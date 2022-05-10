import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormandosPageRoutingModule } from './formandos-routing.module';

import { FormandosPage } from './formandos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormandosPageRoutingModule
  ],
  declarations: [FormandosPage]
})
export class FormandosPageModule {}

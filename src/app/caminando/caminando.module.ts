import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminandoPageRoutingModule } from './caminando-routing.module';

import { CaminandoPage } from './caminando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminandoPageRoutingModule
  ],
  declarations: [CaminandoPage]
})
export class CaminandoPageModule {}

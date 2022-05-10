import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminandoIndexPageRoutingModule } from './caminando-index-routing.module';

import { CaminandoIndexPage } from './caminando-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminandoIndexPageRoutingModule
  ],
  declarations: [CaminandoIndexPage]
})
export class CaminandoIndexPageModule {}

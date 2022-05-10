import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminandoEditionPageRoutingModule } from './caminando-edition-routing.module';

import { CaminandoEditionPage } from './caminando-edition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminandoEditionPageRoutingModule
  ],
  declarations: [CaminandoEditionPage]
})
export class CaminandoEditionPageModule {}

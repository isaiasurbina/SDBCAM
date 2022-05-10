import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsejoGeneralPageRoutingModule } from './consejo-general-routing.module';

import { ConsejoGeneralPage } from './consejo-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsejoGeneralPageRoutingModule
  ],
  declarations: [ConsejoGeneralPage]
})
export class ConsejoGeneralPageModule {}

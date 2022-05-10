import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObisposPageRoutingModule } from './obispos-routing.module';

import { ObisposPage } from './obispos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObisposPageRoutingModule
  ],
  declarations: [ObisposPage]
})
export class ObisposPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FallecidosPageRoutingModule } from './fallecidos-routing.module';

import { FallecidosPage } from './fallecidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FallecidosPageRoutingModule
  ],
  declarations: [FallecidosPage]
})
export class FallecidosPageModule {}

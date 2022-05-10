import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamiliaHomesPageRoutingModule } from './familia-homes-routing.module';

import { FamiliaHomesPage } from './familia-homes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamiliaHomesPageRoutingModule
  ],
  declarations: [FamiliaHomesPage]
})
export class FamiliaHomesPageModule {}

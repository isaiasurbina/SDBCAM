import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamiliaMembersPageRoutingModule } from './familia-members-routing.module';

import { FamiliaMembersPage } from './familia-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamiliaMembersPageRoutingModule
  ],
  declarations: [FamiliaMembersPage]
})
export class FamiliaMembersPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupviewPageRoutingModule } from './groupview-routing.module';

import { GroupviewPage } from './groupview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupviewPageRoutingModule
  ],
  declarations: [GroupviewPage]
})
export class GroupviewPageModule {}

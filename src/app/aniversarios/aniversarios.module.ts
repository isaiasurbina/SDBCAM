import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniversariosPageRoutingModule } from './aniversarios-routing.module';

import { AniversariosPage } from './aniversarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniversariosPageRoutingModule
  ],
  declarations: [AniversariosPage]
})
export class AniversariosPageModule {}

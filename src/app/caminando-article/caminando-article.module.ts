import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminandoArticlePageRoutingModule } from './caminando-article-routing.module';

import { CaminandoArticlePage } from './caminando-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminandoArticlePageRoutingModule
  ],
  declarations: [CaminandoArticlePage]
})
export class CaminandoArticlePageModule {}

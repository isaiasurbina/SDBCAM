import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminandoIndexPage } from './caminando-index.page';

const routes: Routes = [
  {
    path: '',
    component: CaminandoIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminandoIndexPageRoutingModule {}

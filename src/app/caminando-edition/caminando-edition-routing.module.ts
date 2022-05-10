import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminandoEditionPage } from './caminando-edition.page';

const routes: Routes = [
  {
    path: '',
    component: CaminandoEditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminandoEditionPageRoutingModule {}

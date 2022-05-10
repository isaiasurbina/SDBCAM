import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminandoPage } from './caminando.page';

const routes: Routes = [
  {
    path: '',
    component: CaminandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminandoPageRoutingModule {}

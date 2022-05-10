import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsociacionesPage } from './asociaciones.page';

const routes: Routes = [
  {
    path: '',
    component: AsociacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsociacionesPageRoutingModule {}

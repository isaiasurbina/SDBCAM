import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FallecidosPage } from './fallecidos.page';

const routes: Routes = [
  {
    path: '',
    component: FallecidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FallecidosPageRoutingModule {}

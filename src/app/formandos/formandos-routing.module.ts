import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormandosPage } from './formandos.page';

const routes: Routes = [
  {
    path: '',
    component: FormandosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormandosPageRoutingModule {}

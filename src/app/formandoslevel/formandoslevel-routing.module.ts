import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormandoslevelPage } from './formandoslevel.page';

const routes: Routes = [
  {
    path: '',
    component: FormandoslevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormandoslevelPageRoutingModule {}

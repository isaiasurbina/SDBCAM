import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormandoPage } from './formando.page';

const routes: Routes = [
  {
    path: '',
    component: FormandoPage
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormandoPageRoutingModule {}

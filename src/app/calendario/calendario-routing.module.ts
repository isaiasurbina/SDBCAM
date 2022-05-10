import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioPage } from './calendario.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioPage
  },
  {
    path: 'mes',
    loadChildren: () => import('./mes/mes.module').then( m => m.MesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioPageRoutingModule {}

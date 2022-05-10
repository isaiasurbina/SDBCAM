import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObisposPage } from './obispos.page';

const routes: Routes = [
  {
    path: '',
    component: ObisposPage
  },
  {
    path: 'one',
    loadChildren: () => import('./one/one.module').then( m => m.OnePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObisposPageRoutingModule {}

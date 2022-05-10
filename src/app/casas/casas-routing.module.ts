import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasasPage } from './casas.page';

const routes: Routes = [
  {
    path: '',
    component: CasasPage
  },
  {
    path: 'una',
    loadChildren: () => import('./una/una.module').then( m => m.UnaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasasPageRoutingModule {}

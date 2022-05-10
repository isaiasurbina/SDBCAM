import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamiliaHomesPage } from './familia-homes.page';

const routes: Routes = [
  {
    path: '',
    component: FamiliaHomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamiliaHomesPageRoutingModule {}

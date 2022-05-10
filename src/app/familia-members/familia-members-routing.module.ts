import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamiliaMembersPage } from './familia-members.page';

const routes: Routes = [
  {
    path: '',
    component: FamiliaMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamiliaMembersPageRoutingModule {}

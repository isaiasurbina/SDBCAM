import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupviewPage } from './groupview.page';

const routes: Routes = [
  {
    path: '',
    component: GroupviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupviewPageRoutingModule {}

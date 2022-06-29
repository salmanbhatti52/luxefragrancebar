import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberPointsPage } from './member-points.page';

const routes: Routes = [
  {
    path: '',
    component: MemberPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberPointsPageRoutingModule {}

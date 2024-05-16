import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopounDetailsPage } from './copoun-details.page';

const routes: Routes = [
  {
    path: '',
    component: CopounDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopounDetailsPageRoutingModule {}

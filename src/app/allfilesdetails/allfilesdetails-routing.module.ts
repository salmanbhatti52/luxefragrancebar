import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllfilesdetailsPage } from './allfilesdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AllfilesdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllfilesdetailsPageRoutingModule {}

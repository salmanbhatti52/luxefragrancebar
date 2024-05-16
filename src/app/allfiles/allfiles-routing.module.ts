import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllfilesPage } from './allfiles.page';

const routes: Routes = [
  {
    path: '',
    component: AllfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllfilesPageRoutingModule {}

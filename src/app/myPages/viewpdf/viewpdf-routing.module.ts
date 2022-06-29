import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpdfPage } from './viewpdf.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpdfPageRoutingModule {}

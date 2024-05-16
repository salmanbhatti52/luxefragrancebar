import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfdetailsPage } from './pdfdetails.page';

const routes: Routes = [
  {
    path: '',
    component: PdfdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfdetailsPageRoutingModule {}

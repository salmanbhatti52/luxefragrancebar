import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PdffilesPage } from "./pdffiles.page";

const routes: Routes = [
  {
    path: "",
    component: PdffilesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdffilesPageRoutingModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ViewpdfPageRoutingModule } from "./viewpdf-routing.module";

import { ViewpdfPage } from "./viewpdf.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ViewpdfPageRoutingModule],
  declarations: [ViewpdfPage],
})
export class ViewpdfPageModule {}

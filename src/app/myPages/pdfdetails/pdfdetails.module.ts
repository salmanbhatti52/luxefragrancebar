import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfdetailsPageRoutingModule } from './pdfdetails-routing.module';

import { PdfdetailsPage } from './pdfdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfdetailsPageRoutingModule
  ],
  declarations: [PdfdetailsPage]
})
export class PdfdetailsPageModule {}

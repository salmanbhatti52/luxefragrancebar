import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdffilesPageRoutingModule } from './pdffiles-routing.module';

import { PdffilesPage } from './pdffiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdffilesPageRoutingModule
  ],
  declarations: [PdffilesPage]
})
export class PdffilesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllfilesdetailsPageRoutingModule } from './allfilesdetails-routing.module';

import { AllfilesdetailsPage } from './allfilesdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllfilesdetailsPageRoutingModule
  ],
  declarations: [AllfilesdetailsPage],
  entryComponents: [AllfilesdetailsPage]
})
export class AllfilesdetailsPageModule { }

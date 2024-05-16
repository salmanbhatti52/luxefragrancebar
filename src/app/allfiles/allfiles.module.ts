import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllfilesPageRoutingModule } from './allfiles-routing.module';

import { AllfilesPage } from './allfiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllfilesPageRoutingModule
  ],
  declarations: [AllfilesPage]
})
export class AllfilesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopounDetailsPageRoutingModule } from './copoun-details-routing.module';

import { CopounDetailsPage } from './copoun-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopounDetailsPageRoutingModule
  ],
  declarations: [CopounDetailsPage]
})
export class CopounDetailsPageModule {}

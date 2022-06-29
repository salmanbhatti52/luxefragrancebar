import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopounCodePageRoutingModule } from './copoun-code-routing.module';

import { CopounCodePage } from './copoun-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopounCodePageRoutingModule
  ],
  declarations: [CopounCodePage]
})
export class CopounCodePageModule {}

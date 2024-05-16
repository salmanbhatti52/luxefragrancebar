import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterPasswordPageRoutingModule } from './enter-password-routing.module';

import { EnterPasswordPage } from './enter-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterPasswordPageRoutingModule
  ],
  declarations: [EnterPasswordPage]
})
export class EnterPasswordPageModule {}

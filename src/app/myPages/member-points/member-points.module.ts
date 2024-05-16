import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberPointsPageRoutingModule } from './member-points-routing.module';

import { MemberPointsPage } from './member-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberPointsPageRoutingModule
  ],
  declarations: [MemberPointsPage]
})
export class MemberPointsPageModule {}

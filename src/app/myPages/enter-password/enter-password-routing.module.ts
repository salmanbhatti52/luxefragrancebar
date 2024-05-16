import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterPasswordPage } from './enter-password.page';

const routes: Routes = [
  {
    path: '',
    component: EnterPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterPasswordPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopounCodePage } from './copoun-code.page';

const routes: Routes = [
  {
    path: '',
    component: CopounCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopounCodePageRoutingModule {}

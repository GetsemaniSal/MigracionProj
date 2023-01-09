import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActaConstitutivaPage } from './acta-constitutiva.page';

const routes: Routes = [
  {
    path: '',
    component: ActaConstitutivaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActaConstitutivaPageRoutingModule {}

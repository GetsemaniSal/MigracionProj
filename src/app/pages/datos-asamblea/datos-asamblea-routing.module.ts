import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosAsambleaPage } from './datos-asamblea.page';

const routes: Routes = [
  {
    path: '',
    component: DatosAsambleaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosAsambleaPageRoutingModule {}

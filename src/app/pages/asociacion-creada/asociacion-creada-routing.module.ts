import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsociacionCreadaPage } from './asociacion-creada.page';

const routes: Routes = [
  {
    path: '',
    component: AsociacionCreadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsociacionCreadaPageRoutingModule {}

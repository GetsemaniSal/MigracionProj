import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambioOrdinarioPage } from './cambio-ordinario.page';

const routes: Routes = [
  {
    path: '',
    component: CambioOrdinarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambioOrdinarioPageRoutingModule {}

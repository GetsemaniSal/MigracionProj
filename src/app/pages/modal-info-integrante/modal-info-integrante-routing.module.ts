import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInfoIntegrantePage } from './modal-info-integrante.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInfoIntegrantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInfoIntegrantePageRoutingModule {}

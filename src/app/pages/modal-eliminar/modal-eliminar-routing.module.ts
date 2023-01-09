import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEliminarPage } from './modal-eliminar.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEliminarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEliminarPageRoutingModule {}

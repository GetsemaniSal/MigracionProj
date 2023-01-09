import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiembrosAsambleaPage } from './miembros-asamblea.page';

const routes: Routes = [
  {
    path: '',
    component: MiembrosAsambleaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiembrosAsambleaPageRoutingModule {}

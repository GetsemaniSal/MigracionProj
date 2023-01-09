import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesaDebatesPage } from './mesa-debates.page';

const routes: Routes = [
  {
    path: '',
    component: MesaDebatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesaDebatesPageRoutingModule {}

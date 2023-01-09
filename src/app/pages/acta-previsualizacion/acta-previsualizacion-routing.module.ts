import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActaPrevisualizacionPage } from './acta-previsualizacion.page';

const routes: Routes = [
  {
    path: '',
    component: ActaPrevisualizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActaPrevisualizacionPageRoutingModule {}

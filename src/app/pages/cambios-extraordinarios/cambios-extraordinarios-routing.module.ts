import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiosExtraordinariosPage } from './cambios-extraordinarios.page';

const routes: Routes = [
  {
    path: '',
    component: CambiosExtraordinariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiosExtraordinariosPageRoutingModule {}

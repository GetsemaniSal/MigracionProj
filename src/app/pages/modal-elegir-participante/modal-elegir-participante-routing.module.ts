import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalElegirParticipantePage } from './modal-elegir-participante.page';

const routes: Routes = [
  {
    path: '',
    component: ModalElegirParticipantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalElegirParticipantePageRoutingModule {}

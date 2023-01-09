import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalElegirParticipantePageRoutingModule } from './modal-elegir-participante-routing.module';

import { ModalElegirParticipantePage } from './modal-elegir-participante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalElegirParticipantePageRoutingModule
  ],
  declarations: [ModalElegirParticipantePage]
})
export class ModalElegirParticipantePageModule {}

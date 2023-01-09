import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEliminarPageRoutingModule } from './modal-eliminar-routing.module';

import { ModalEliminarPage } from './modal-eliminar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEliminarPageRoutingModule
  ],
  declarations: [ModalEliminarPage]
})
export class ModalEliminarPageModule {}

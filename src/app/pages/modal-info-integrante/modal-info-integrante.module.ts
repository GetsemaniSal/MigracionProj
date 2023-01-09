import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInfoIntegrantePageRoutingModule } from './modal-info-integrante-routing.module';

import { ModalInfoIntegrantePage } from './modal-info-integrante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoIntegrantePageRoutingModule
  ],
  declarations: [ModalInfoIntegrantePage]
})
export class ModalInfoIntegrantePageModule {}

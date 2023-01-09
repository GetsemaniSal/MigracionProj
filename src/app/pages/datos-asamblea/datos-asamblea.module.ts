import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosAsambleaPageRoutingModule } from './datos-asamblea-routing.module';

import { DatosAsambleaPage } from './datos-asamblea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosAsambleaPageRoutingModule
  ],
  declarations: [DatosAsambleaPage]
})
export class DatosAsambleaPageModule {}

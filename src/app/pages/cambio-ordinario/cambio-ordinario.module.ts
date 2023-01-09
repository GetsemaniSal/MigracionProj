import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioOrdinarioPageRoutingModule } from './cambio-ordinario-routing.module';

import { CambioOrdinarioPage } from './cambio-ordinario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioOrdinarioPageRoutingModule
  ],
  declarations: [CambioOrdinarioPage]
})
export class CambioOrdinarioPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsociacionCreadaPageRoutingModule } from './asociacion-creada-routing.module';

import { AsociacionCreadaPage } from './asociacion-creada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsociacionCreadaPageRoutingModule
  ],
  declarations: [AsociacionCreadaPage]
})
export class AsociacionCreadaPageModule {}

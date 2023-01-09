import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConclusionAsociacionPageRoutingModule } from './conclusion-asociacion-routing.module';

import { ConclusionAsociacionPage } from './conclusion-asociacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConclusionAsociacionPageRoutingModule
  ],
  declarations: [ConclusionAsociacionPage]
})
export class ConclusionAsociacionPageModule {}

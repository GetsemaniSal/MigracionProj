import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActaPrevisualizacionPageRoutingModule } from './acta-previsualizacion-routing.module';

import { ActaPrevisualizacionPage } from './acta-previsualizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActaPrevisualizacionPageRoutingModule
  ],
  declarations: [ActaPrevisualizacionPage]
})
export class ActaPrevisualizacionPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembrosAsambleaPageRoutingModule } from './miembros-asamblea-routing.module';

import { MiembrosAsambleaPage } from './miembros-asamblea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiembrosAsambleaPageRoutingModule
  ],
  declarations: [MiembrosAsambleaPage]
})
export class MiembrosAsambleaPageModule {}

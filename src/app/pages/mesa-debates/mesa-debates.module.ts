import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaDebatesPageRoutingModule } from './mesa-debates-routing.module';

import { MesaDebatesPage } from './mesa-debates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesaDebatesPageRoutingModule
  ],
  declarations: [MesaDebatesPage]
})
export class MesaDebatesPageModule {}

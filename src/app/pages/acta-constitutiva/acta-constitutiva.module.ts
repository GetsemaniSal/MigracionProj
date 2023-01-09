import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActaConstitutivaPageRoutingModule } from './acta-constitutiva-routing.module';

import { ActaConstitutivaPage } from './acta-constitutiva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActaConstitutivaPageRoutingModule
  ],
  declarations: [ActaConstitutivaPage]
})
export class ActaConstitutivaPageModule {}

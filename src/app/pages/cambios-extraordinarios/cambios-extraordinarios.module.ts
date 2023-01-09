import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiosExtraordinariosPageRoutingModule } from './cambios-extraordinarios-routing.module';

import { CambiosExtraordinariosPage } from './cambios-extraordinarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiosExtraordinariosPageRoutingModule
  ],
  declarations: [CambiosExtraordinariosPage]
})
export class CambiosExtraordinariosPageModule {}

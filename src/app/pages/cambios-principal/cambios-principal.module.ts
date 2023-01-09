import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiosPrincipalPageRoutingModule } from './cambios-principal-routing.module';

import { CambiosPrincipalPage } from './cambios-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiosPrincipalPageRoutingModule
  ],
  declarations: [CambiosPrincipalPage]
})
export class CambiosPrincipalPageModule {}

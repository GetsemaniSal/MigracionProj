import { importProvidersFrom, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonBackButton, IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ActaConstitutivaPage}from '../app/pages/acta-constitutiva/acta-constitutiva.page'
import {ActaPrevisualizacionPage} from '../app/pages/acta-previsualizacion/acta-previsualizacion.page'
import {AsociacionCreadaPage} from '../app/pages/asociacion-creada/asociacion-creada.page'
import {CambioOrdinarioPage} from '../app/pages/cambio-ordinario/cambio-ordinario.page'
import {CambiosExtraordinariosPage} from '../app/pages/cambios-extraordinarios/cambios-extraordinarios.page'
import {CambiosPrincipalPage} from '../app/pages/cambios-principal/cambios-principal.page'
import {ConclusionAsociacionPage} from '../app/pages/conclusion-asociacion/conclusion-asociacion.page'
import {DatosAsambleaPage}from '../app/pages/datos-asamblea/datos-asamblea.page'
import {LoginPage} from '../app/pages/login/login.page'
import {MesaDebatesPage} from '../app/pages/mesa-debates/mesa-debates.page'
import {AppDataService} from '../app/services/app-data/app-data.service'
import {CatalogoService} from '../app/services/catalogo/catalogo.service'
import {CentroDeTrabajoService} from '../app/services/centro-de-trabajo/centro-de-trabajo.service'
import {DatosAsambleaService} from '../app/services/datos-asamblea/datos-asamblea.service'
import {IntegrantesService} from '../app/services/integrantes/integrantes.service'
import {TutoresService} from '../app/services/tutores/tutores.service'
import { DatosCambioService } from './services/datos-cambio/datos-cambio.service';
import { MomentosPipe } from './pipes/momentos/momentos.pipe';

enableProdMode();

@NgModule({
  declarations: [
    ActaConstitutivaPage,
    ActaPrevisualizacionPage,
    AsociacionCreadaPage,
    CambioOrdinarioPage,
    CambiosExtraordinariosPage,
    // AppComponent,
    AppRoutingModule,
    CambiosPrincipalPage,
    CatalogoService,
    ConclusionAsociacionPage,
    DatosAsambleaPage,
    LoginPage,
    AppDataService,
    CentroDeTrabajoService,
    DatosAsambleaService,
    IntegrantesService,
    TutoresService,
    MesaDebatesPage,
    IonBackButton,
    MomentosPipe
  
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,

  ],

  providers: [
  CentroDeTrabajoService,
  AppDataService,
  CatalogoService,
  DatosAsambleaService,
  DatosCambioService,
  IntegrantesService,
  TutoresService
  ],
  bootstrap: [AppModule],
})
export class AppModule {}

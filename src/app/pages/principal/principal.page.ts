import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController,PopoverController, ToastController} from '@ionic/angular';
import { DatosAsambleaPage } from '../datos-asamblea/datos-asamblea.page';
import { AsociacionCreadaPage } from '../asociacion-creada/asociacion-creada.page';
import { CentroDeTrabajoService } from 'src/app/services/centro-de-trabajo/centro-de-trabajo.service';
import { CatalogoService } from 'src/app/services/catalogo/catalogo.service';
import { IntegrantesService } from 'src/app/services/integrantes/integrantes.service';
import { TutoresService } from 'src/app/services/tutores/tutores.service';
import { AppDataService } from 'src/app/services/app-data/app-data.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage  {
  
  public mensaje: string= 'este es el mensaje';
  public insenabled: boolean=false;
  public login:{user: string , password: string}

// public CTFromLogin: LoginResponseElement
public ErrorRetrievingData =true;

public periodoCaptura: PeriodoCapturaResponse = <PeriodoCapturaResponse>{
   FechaInicio: ''
 }
   public datosCentro: DatosCentroTrabajoResponse = <DatosCentroTrabajoResponse> <any> {
     fechaInicio: ''
   }
  
   public constructor() {

    }

   ngOnInit() {
}
}
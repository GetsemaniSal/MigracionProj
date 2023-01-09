import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class CatalogoService {

private cargosMesaDebate:string ='https://padres-familia-msvc.sev.gob.mx/api/CargosMesa/';
// public cargo: MesaCargoConten = { Debate:[], Directivo:[] }

  constructor(public  http:HttpClient) {

    
   }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
@Injectable()


export class AppDataService {

  private usuarioEndPoint: string ='https://auth.sev.gob.mx/basic/centro-trabajo';


  // constructor(pdb: ProblemDetailsBuilder, private http: HttpClient) {
  //   super(pdb, environment.production);
  // }
}

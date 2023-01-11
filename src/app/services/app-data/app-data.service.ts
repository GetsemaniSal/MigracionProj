import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
@Injectable()

export class AppDataService {
  private usuarioEndPoint: string ='https://auth.sev.gob.mx/basic/centro-trabajo';


  constructor(
    public http: HttpClient
) {
}

public Login(login: any) {
    return this.http.post(this.usuarioEndPoint,login);
    
}
}

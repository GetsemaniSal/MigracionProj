 import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import momentos from 'momentos';
@Pipe({
    name: 'momentos',
})
export class MomentosPipe implements PipeTransform {
    public periodoCaptura: PeriodoCapturaResponse = <PeriodoCapturaResponse>{
        FechaInicio:''
    }
  
   public constructor(
    public http: HttpClient
   ){

    http.post ('https://padres-familia-msvc.sev.gob.mx/api/Periodo/', { CCT: '30EPR1749I', Ciclo: '18-19' })
    .subscribe((Periodo: PeriodoCapturaResponse) => {
        this.periodoCaptura = Periodo;
        console.log('p', this.periodoCaptura);
    })
    

   }
  transform(value) {
    var a = momentos('2022/12/06');
    var b = value;
    let resta = a.diff(b, 'days');


    if (resta <= 5) {
        return ("sólo"+resta+"dias");

    }else{
        return ("hasta el " + a.lang("es").format("dddd,DD MMM"))
    }
   }
 }

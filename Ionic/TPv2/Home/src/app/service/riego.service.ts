import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logRiego } from '../model/Riego';


@Injectable({
  providedIn: 'root'
})
export class RiegoService {

  urlApi = 'http://localhost:8000/api'
  constructor(private _http:HttpClient) { }


 getLogByElectrovalvulaById(id):Promise<logRiego[]>{
   return this._http.get(this.urlApi + "/electrovalvulaId/" + id + "/riego").toPromise().then((riego:logRiego[])=>{
     return riego;
    });
  }  

 /* getMedicionesByDispositivoId(id):Promise<Medicion[]>{
    return this._http.get(this.urlApi + "/medicion/" + id + "/todas").toPromise().then((mediciones:Medicion[])=>{
      return mediciones
    });
  }

  AddMedicion(medicion:Medicion){
    return this._http.post(this.urlApi + "/medicion/agregar",{fecha:medicion.fecha,valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>{
      return result;
    });*/
}

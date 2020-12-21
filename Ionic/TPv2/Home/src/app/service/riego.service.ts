import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logRiego } from '../model/Riego';


@Injectable({
  providedIn: 'root'
})
export class RiegoService {

  urlApi = 'http://localhost:8000/api'
  constructor(private _http:HttpClient) { }


 getLogByElectrovalvulaById(idElectrovalvula):Promise<logRiego>{
   return this._http.get(this.urlApi + "/riego/"+ idElectrovalvula).toPromise().then((riego:logRiego)=>{
     return riego;
    });
  }
  
 getLogsByElectrovalvulaById(idElectrovalvula):Promise<logRiego[]>{
  return this._http.get(this.urlApi + "/riego/"+ idElectrovalvula + "/todas").toPromise().then((logR:logRiego[])=>{
    return logR;
   });
 }  
}

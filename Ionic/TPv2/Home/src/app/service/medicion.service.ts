import { Injectable } from '@angular/core';
import { Medicion } from '../model/Medicion';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  urlApi = 'http://localhost:3000/api'
  constructor(private _http:HttpClient) { }


  getMedicionbyDispositivoId(id):Promise<Medicion[]>{
    return this._http.get(this.urlApi + "/medicion"+id).toPromise().then((medicion:Medicion[])=>{
     return medicion;
    })
  }

}

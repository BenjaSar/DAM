import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dispositivos } from '../model/Dispositivo';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  //Se simula el backend a traves del JSON
  //Se encarga de acceder a la base de datos y tener toda la lógica de negocios
  listadoDispositivo: Array<Dispositivos> = new Array<Dispositivos>();
  
  //Para trabajar con HttpClient se debe conocer la url del backend 
  //Se le debe pegar a la API
  //frontEnd le pega al backend por medio del service.
  //Backend le pega a la base de datos.
   // urlBackend = 'http://localhost:3000/api' //Url donde está hosteada la API

  constructor(private _http:HttpClient) {

   let Device1 = new Dispositivos(1, "Sensor 1", "Patio Versalles", 1);
   let Device2 = new Dispositivos(2, "Sensor 2", "Cocina", 2);
   let Device3 = new Dispositivos(3, "Sensor 3", "Jardin delantero", 3);
   let Device4 = new Dispositivos(4, "Sensor 4", "Living", 4);

   this.listadoDispositivo.push(Device1);
   this.listadoDispositivo.push(Device2);
   this.listadoDispositivo.push(Device3);
   this.listadoDispositivo.push(Device4);
   }

  getDispositivos(id):Dispositivos{
  return this.listadoDispositivo.filter(dispositivo=> dispositivo.dispositivoId==id)[0];
   }
   //RxJS
   //Observable: Permite manjear 0,1 o mas eventos. Puede ser cancelado. Las variables observables se identifican con $
   //En NgOnDestroy se realizan las cancelaciones de suscripcion
   //Promesas manejan solo 1 evento. No se pueden cancelar.
   //Metodos; .then (encola codigo) y .cacht retornan promesas
  /* getDispositivos():Promise<Dispositivos[]>{
     return this._http.get(this.urlBackend + "/dispositvo").toPromise().then((listado:Dispositivos[])=>{
      return listado;

     })
   }*/
   //toPromise: convierte observables en promesas
}

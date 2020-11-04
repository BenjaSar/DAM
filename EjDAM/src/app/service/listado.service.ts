import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';


@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  //Para simular un backend: variable en el servicio cargada con un json
  listadoDispositivo: Dispositivo[] = [{
    nombre: "Dispositivo 1",
    ubicacion: "Cocina"},
    {
      nombre: "Dispositivo 2",
      ubicacion: "Living",
  }];

  constructor() { }
    getDispositivo(){

      return this.listadoDispositivo;
    }


}

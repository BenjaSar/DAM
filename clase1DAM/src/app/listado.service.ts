import { Injectable } from '@angular/core';
import {Dispositivos} from  './model/Dispositivos'

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  ListadoDispositivios=[] = [{

    nombre : "Dispositivo 1",
    ubicacion: "Cocina",
    fecha: ""
  },
  {
    nombre : "Dispositivo 2",
    ubicacion: "Living",
    fecha: ""

  }

];
  constructor() { }
}

getDispositivos(){

  return this.ListadoDispositivios
}

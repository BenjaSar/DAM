import { Injectable } from '@angular/core';
import { Dispositivos } from '../model/Dispositivo';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  //Se simula el backend a traves del JSON
  listadoDispositivo: Array<Dispositivos> = new Array<Dispositivos>();

  constructor() {
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
}

import { Component } from '@angular/core';
import { Dispositivos } from '../model/Dispositivo';
import { ListadoService } from '../service/listado.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//variableSrcImagen:string = "hola"
nombre:string = "Benjamin"
apellido:string = "Sarmiento"

estaHabilitado:boolean  = true;
tab1Root: any = 'devices';

miArray =[1,2,3,4,5,6];

//Devices: { dispositivoId: number; nombre: string; ubicacion: string; electrovalvulaId: number; }[];
//Devices = []
Devices  = [{
  "dispositivoId": 1,
  "nombre": "Sensor 1",
  "ubicacion": "Patio",
  "electrovalvulaId": 1
}, {
  "dispositivoId": 2,
  "nombre": "Sensor 2",
  "ubicacion": "Cocina",
  "electrovalvulaId": 2
}, {
  "dispositivoId": 3,
  "nombre": "Sensor 3",
  "ubicacion": "Jardin Delantero",
  "electrovalvulaId": 3
}, {
  "dispositivoId": 4,
  "nombre": "Sensor 2",
  "ubicacion": "Living",
  "electrovalvulaId": 4
}]
//listadoServ es una instancia de ListadoService
listadoDevices:Dispositivos[];
/*constructor(public listadoServ:ListadoService) {
  console.log("Estoy fuera del then 1")
  this.listadoServ.getDispositivos().then((listado)=>{
    this.listadoDevices = listado;
    console.log("Estoy en el .then " + this.listadoDevices)  
  });
  console.log("Estoy fuera del then 2")
}*/

/*constructor(public listadoServ:ListadoService) {
  console.log(this.listadoServ.getDispositivos());
  this.Devices = this.listadoServ.getDispositivos();  
}*/

ngOnInit(): void {
//Los graficos se cargan aqui.
}

clickEnBoton(){

  console.log("Se hizo click");
  console.log(this.nombre);
  console.log(this.apellido);
  //this.nombre = "Milena";
  //this.apellido = "Viltes";
  }

}

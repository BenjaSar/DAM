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
nombre:string = "Benjamin";
apellido:string = "Sarmiento";

estaHabilitado:boolean  = true;
tab1Root: any = 'devices';
idDevice;
public device :Dispositivos;

miArray =[1,2,3,4,5,6];

//listadoServ es una instancia de ListadoService
listadoDevices:Dispositivos[];
constructor(public listadoServ:ListadoService) {
  console.log("Estoy fuera del then 1");
  this.listadoServ.getDispositivos().then((listado)=>{
    this.listadoDevices = listado;
    console.log("Estoy en el .then " + this.listadoDevices);  
  });
  console.log("Estoy fuera del then 2");

  //Obtener dispositivos por ID.
  /*this.listadoServ.getDispositivo(this.idDevice).then((dispositivo)=>{
    this.device = dispositivo;
    console.log("Estoy en el .then " + this.device);  
  });*/
  
};




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

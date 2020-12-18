import { Component } from '@angular/core';
import { Dispositivos } from '../model/Dispositivo';
import { ListadoService } from '../service/listado.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

tab1Root: any = 'devices';
public device :Dispositivos;

listadoDevices:Dispositivos[];
constructor(public listadoServ:ListadoService) {
  console.log("Estoy fuera del then 1");
  this.listadoServ.getDispositivos().then((listado)=>{
    this.listadoDevices = listado;
    console.log("Estoy en el .then " + this.listadoDevices);  
  });
  console.log("Estoy fuera del then 2");
};

ngOnInit(): void {}

}

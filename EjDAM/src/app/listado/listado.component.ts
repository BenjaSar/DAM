import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../service/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  //variableSrcImagen:string = "hola"
  nombre:string = "Benjamin"
  apellido:string = "Sarmiento"

  estaHabilitado:boolean  = true
  
  constructor(public listadoServ:ListadoService) {
    console.log(this.listadoServ.getDispositivo());
    }

  ngOnInit(): void {
  }

  clickEnBoton(){

    console.log("Se hizo click");
    console.log(this.nombre);
    console.log(this.apellido);
    //this.nombre = "Milena";
    //this.apellido = "Viltes";
  }

  cambiar(){
    console.log(this.estaHabilitado);
    this.estaHabilitado =! this.estaHabilitado;
    console.log("Se cambia por:" + this.estaHabilitado);

  }

}
//Binding : One way: Interpolacion {{}}
//Binding: Two ways [()]
//Binding : [] => Property
//Binding : () => Escucha eventos

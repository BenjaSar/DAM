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

  estaHabilitado:boolean  = true;

  miArray =[1,2,3,4,5,6];
  listado;
  
  
  constructor(public listadoServ:ListadoService) {
    console.log(this.listadoServ.getDispositivo());
    this.listado = this.listadoServ.getDispositivo();  
  }

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

  cambiar(){
    console.log(this.estaHabilitado);
    this.estaHabilitado =! this.estaHabilitado;
    console.log("Se cambia por:" + this.estaHabilitado);

  }

  //Para escuchar manejar los eventos del hijo, creamos un metodo
  manejarCambio(e){
    console.log("Manejo cambios del hijo, me notifica esto por parametro " + JSON.stringify(e));

  }

}
//Binding : One way: Interpolacion {{}}
//Binding: Two ways [()]
//Binding : [] => Property
//Binding : () => Escucha eventos

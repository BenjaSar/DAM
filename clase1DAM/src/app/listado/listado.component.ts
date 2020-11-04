import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  estaHabilitado:boolean = true;
  variable:string = "Hola";
  miArray = [1,2];
  
  constructor() { }

  ngOnInit(): void {
  }

}

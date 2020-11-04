import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  //En declaration se incluye todo lo que hace parte del modulo
  declarations: [ListadoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  //Lo que quiero tener disponible para los demas modulos
  exports: [ListadoComponent]
})
export class ListadoModule { }
//[]
//Binding: comunica el html con una la lógica (class) de typescript, que se puede utilizar para vincular propiedades (property binding) html del elemento a un valor declarado en el listado.component.ts
//Para manejar eventos usar evenbinding
//Servicios: clases para ir a buscar datos y conectar el backend. Viene dado por @injectable. Llamamos a la URL del backend. listadoComponent controlador de la vista
//Por parametro del constructor recibe  la dependencia de una instancia del servicio.
//Para crear un servicio en angular: ng generate service path/nombredelservicio
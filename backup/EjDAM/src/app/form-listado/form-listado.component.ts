import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-listado',
  templateUrl: './form-listado.component.html',
  styleUrls: ['./form-listado.component.css']
})
export class FormListadoComponent implements OnInit {

  public formDispositivo: FormGroup;

  constructor(private fBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  //Metodo encargado de crear el grupo de controles para mi formulario de dispositivo
  private createForm(){
    this.formDispositivo=this.fBuilder.group({
      //json clave:valor. 
      //El primer valor del array, es el valor por defecto
      //Segundo parametro: validacion reactiva (Validators)
      nombre:['', Validators.required],
      ubicacion:['', Validators.required],
      email:['', Validators.required, Validators.email]
      //Maquina de estados de los formularios. Los dos estados mas comunes: habilitado, nohabilitado.
      //Estado pending,
      //Disable
      //Maquina de estado de los controlers
      //Los campos deben coincidir con el html
      //[]
    }); 
    
  }

  guardarDispositivo(){
    console.log("Voy a guardar");
    console.log(this.formDispositivo.get("nombre").value);
    console.log(this.formDispositivo.get("ubicacion").value);
    console.log(this.formDispositivo.get("email").value)
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  //  console.log(JSON.stringify(this.formDispositivo));
  }
  //Metodo encargado de crear el grupo de controles para mi formulario de dispositivo
  //Antes de crear el formulario hago las consultas al backend
  private createForm(){
    this.formDispositivo=this.fBuilder.group({
      //fBuilder recibe un json clave (input a utilizar):valor(array). 
      //El primer valor del array, es el valor por defecto
      //Segundo parametro: validacion reactiva (Validators)
      nombre:['', Validators.required],
      //[valorpordefecto, validacionreactiva]
      ubicacion:['', Validators.required],
      //Se aceptan multiples validaciones
      email:['', Validators.required]
      //Maquina de estados de los formularios. Los dos estados mas comunes: habilitado, nohabilitado.
      //Estado pending,
      //Disable
      //Maquina de estado de los controlers
      //Los campos deben coincidir con el html
      //[]
    }); 
    
  }

  //Metodo encargado de guardar la informacion obtenida a través del metodo get
  //Al llegar aqui los datos están ok.
  guardarDispositivo(){
    console.log("Voy a guardar");
    console.log(this.formDispositivo.get("nombre").value);
    console.log(this.formDispositivo.get("ubicacion").value);
    console.log(this.formDispositivo.get("email").value)
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../service/medicion.service';
import Handsontable from "handsontable";
import 'handsontable/dist/handsontable.full.css';


@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.page.html',
  styleUrls: ['./medicion.page.scss'],
})
export class MedicionPage implements OnInit {
  
  public mediciones: Medicion[];
  tableStyle = 'material';

  constructor(public medicionService:MedicionService, private activedRoute: ActivatedRoute) {  
    let idDispositivo = ​ parseInt(this​.activedRoute.snapshot​.paramMap​.get​('id'));

    //Promesa de la tabla de mediciones
    this.medicionService.getMedicionesByDispositivoId(idDispositivo).then((mediciones)=>{
     this.mediciones = mediciones;
     console.log("Array de medciones:  "+ mediciones);
     }); 

  }

  ngOnInit() { }

}

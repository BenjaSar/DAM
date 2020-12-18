import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../service/medicion.service';


@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.page.html',
  styleUrls: ['./medicion.page.scss'],
})
export class MedicionPage implements OnInit {
  public idMedicion :string; 
  public idDispositivo;
  public measures: Medicion[];
  tableStyle = 'material';

  constructor(public medicionService:MedicionService, private activedRoute: ActivatedRoute) {

    //Promesa de listado de mediciones
    this.medicionService.getMedicionesByDispositivoId(this.idDispositivo).then((mediciones)=>{
      this.measures = mediciones;
    });
   }

  ngOnInit() {
    this.idMedicion = ​ this​.activedRoute.snapshot​.paramMap​.get​('idMedicion');
  }

}

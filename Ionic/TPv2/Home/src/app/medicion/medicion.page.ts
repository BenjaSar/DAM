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
  public idMedicion; 
  public idDispositivo;
  public medicion:Medicion;
  tableStyle = 'material';

  constructor(private medicionService:MedicionService, private activedRoute: ActivatedRoute) {

    this.medicionService.getMedicionByDispositivoId(this.idDispositivo).then((measure)=>{
      this.medicion = measure;
    });
   }

  ngOnInit() {
    this.idMedicion = ​ this​.activedRoute.snapshot​.paramMap​.get​('id');
  }

}

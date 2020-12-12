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
  public idDispositivo; 
  public medicion:Medicion;
  constructor( private medicionService:MedicionService, private activedRoute: ActivatedRoute) {
    this.medicionService.getMedicionByDispositivoId(this.idDispositivo).then((measure)=>{
      this.medicion = measure;
    });
   }

  ngOnInit() {}

}

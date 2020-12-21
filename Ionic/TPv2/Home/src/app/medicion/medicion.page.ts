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
  
  public mediciones: Medicion[];
  tableStyle = 'material';

  constructor(public medicionService:MedicionService, private activedRoute: ActivatedRoute) {}

  ngOnInit() {
        
    let DeviceID = ​ this​.activedRoute.snapshot​.paramMap​.get​('idDevice');

     //Promesa del ùltimo valor de medicion.   
     this.medicionService.getMedicionesByDispositivoId(DeviceID).then((mediciones)=>{
      this.mediciones = mediciones;
      console.log(mediciones);
      }); 
   
  }

}

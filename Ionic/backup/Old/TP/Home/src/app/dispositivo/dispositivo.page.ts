import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivos } from '../model/Dispositivo';
import { ListadoService } from '../service/listado.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  constructor(private router: ActivatedRoute, private dService:ListadoService) { }

  public device :Dispositivos
  ngOnInit() {
    let​ ​ idDispositivo​ = ​ this​.router.snapshot​.paramMap​.get​('id');
    //this.device = this.dService.getDispositivos(idDispositivo);
    console.log(this.device);
    //Traigo la ultima medicion que tiene el sensor
    //paramsMap: Todos los valores declarados dentro de app-routing (/:id)
    //En docker levantar la base de datos y el phpadmin
  }
  
  ionViewWillEnter(){
  }

}

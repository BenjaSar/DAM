import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { logRiego } from '../model/Riego';
import { RiegoService } from '../service/riego.service';

@Component({
  selector: 'app-riego',
  templateUrl: './riego.page.html',
  styleUrls: ['./riego.page.scss'],
})
export class RiegoPage implements OnInit {

  public idElectrovalvula; 
  idLogRiego;
  public logsRiego : logRiego[];
  public logRiego : logRiego;
  idLog;
 
  constructor(private route: ActivatedRoute, public riegoService: RiegoService) {
    this.riegoService.getLogsByElectrovalvulaById(this.idElectrovalvula).then((logR)=>{
      this.logsRiego = logR;
    });

    this.riegoService.getLogByElectrovalvulaById(this.idElectrovalvula).then((riego)=>{
      this.logRiego = riego;
    });

   }

   

  ngOnInit() {
    this.idLogRiego = ​ this​.route.snapshot​.paramMap​.get​('idElectrovalvula');
  }  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-riego',
  templateUrl: './riego.page.html',
  styleUrls: ['./riego.page.scss'],
})
export class RiegoPage implements OnInit {

  public idElectrovalvula; 
  idLogRiego;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.idLogRiego = ​ this​.route.snapshot​.paramMap​.get​('id');
  }


    //this.idElectrovalvula = ​ this​.router.snapshot​.paramMap​.get​('electrovalvula/:id');
  
}

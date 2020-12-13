import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-electrovalvula',
  templateUrl: './electrovalvula.page.html',
  styleUrls: ['./electrovalvula.page.scss'],
})
export class ElectrovalvulaPage implements OnInit {
  idElectrovalvula;

  constructor(private route:ActivatedRoute) {
   }

  ngOnInit( ) {
    this.idElectrovalvula = ​ this​.route.snapshot​.paramMap​.get​('id');
  }

}

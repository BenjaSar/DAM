import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-electrovalvula',
  templateUrl: './electrovalvula.page.html',
  styleUrls: ['./electrovalvula.page.scss'],
})
export class ElectrovalvulaPage implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent implements OnInit {
  //Componente hijo
  @Input() atributoDispositivo;
  //El EventEmitter debe provenir de @angula core
  @Output() evento = new EventEmitter();
  //@Output: Permite pasarle los parámetros al padre
  //No autoimportar el EvenEmitter. Debe provenir de @core
  constructor() { }

  ngOnInit(): void {
    console.log(this.atributoDispositivo);
  }

  cambiarHijo(disp){
    disp.nombre = "nombreCambiado";
    //emit trabaja con el patron observer
    //Notifica al padre de los cambios efectuados del hijo.
    this.evento.emit({test:"valor"});
  }
}

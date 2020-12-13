import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivos } from '../model/Dispositivo';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
import { MedicionService } from '../service/medicion.service';
import { Medicion } from '../model/Medicion';
import { RiegoService } from '../service/riego.service';
import { logRiego } from '../model/Riego';
import { ListadoService } from '../service/listado.service';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);



@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {
  private valorObtenido:number=0;
  public myChart;
  private chartOptions;
  //public idDispositivo; 
  public idElectrovalvula;
  abrirElectrovalvula: boolean = true;
  public logRiego: logRiego[];
  public id;
  public idE;
  public medicion:Medicion;
  public disp : Dispositivos;

 
  constructor(private router: ActivatedRoute, private riegoService:RiegoService, public listadoServ:ListadoService, private medicionService:MedicionService) { 

    setTimeout(()=>{
      console.log("Cambio el valor del sensor");
      this.valorObtenido= this.medicion.valor;
      //llamo al update del chart para refrescar y mostrar el nuevo valor
      this.myChart.update({series: [{
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    },2000);
  }

  ngOnInit() {
    //Promesa de listado de dispositivos. Devuelve un array con la lista de dispositivos.
    let idDispositivo​ = ​ this​.router.snapshot​.paramMap​.get​('id');
    this.listadoServ.getDispositivo(idDispositivo).then((dispositivo)=>{
      this.disp = dispositivo;
    }); 

    //Promesa del ùltimo valor de medicion.   
    this.medicionService.getMedicionByDispositivoId(idDispositivo).then((measure)=>{
      this.medicion = measure;
    });

    //Obtener electrovalvula por ID.
    /*this.listadoServ.getElectrovalvula(this.idE).then((dispositivo)=>{
    this.deviceE = dispositivo;
    console.log("Estoy en el .then " + this.deviceE);  
    });*/


     //Se emplea el objeto Date.
     let current_datetime = new Date()
     let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
     let a : Medicion= new Medicion(99,formatted_date,99,1);

    //paramsMap: Todos los valores declarados dentro de app-routing (/:id)
  }

  ionViewDidEnter() {
    this.generarChart();
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor'
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
  
  ionViewWillEnter(){
  }
  //var a : Medicion= new Medicion(99,moment().format("YYYY-MM-DD hh:mm:ss"),99,1);

  
  cambiar(){
    console.log(this.abrirElectrovalvula);
    this.abrirElectrovalvula =! this.abrirElectrovalvula;
    console.log("Se cambia por:" + this.abrirElectrovalvula);
  }
}


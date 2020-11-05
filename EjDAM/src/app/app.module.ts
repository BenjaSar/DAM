import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoModule } from './listado/listado.module';

//import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
   
    AppComponent,
    
  //El pipe de fecha debe ir en el modulo raiz, ya que se va a usar en toda la aplicacion
    
  ],
  imports: [
    //Array de punteros a otros modulos
    BrowserModule,
    AppRoutingModule, 
    ListadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

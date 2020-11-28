import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNombreDirectiva]'
})
export class NombreDirectivaDirective {

  constructor(private el: ElementRef) {
   
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.cambiar('blue');
   }


   @HostListener('mouseleave') onMouseLeave(){
    this.cambiar('null');
   }

   cambiar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
   }

}
//Directiva de atributo: recibe una referencia del elemento HTML que vamos a modificar
//ElementRef: Referencia directa al HTMLElement
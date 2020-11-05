import { Pipe, PipeTransform } from '@angular/core';
/*
Exponente por default 1 
Uso:
valor|elevar:exponente
Ej: {{2|elevar:10}}
devuelve: 2014
*/
@Pipe({
  name: 'elevar'
  //Name: invocación del pipe
})
export class NombrePipe implements PipeTransform {

  transform(value: number,exponente?:number): number {
    return Math.pow(value, isNaN(exponente)?1:exponente);
  }
//Reemplazar unknown por any (cualquier tipo de dato)
//Parametro opcional?
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string): string {
    let fecha = new Date(value);
    let output: string;

    let d: string = ('0' + fecha.getDate() + 1).slice(-2);
    let month : string = ('0' + fecha.getMonth() + 1).slice(-2);
    let y : string = fecha.getFullYear().toString();


    output = d + '/' + month + '/' + y;

    return output;
  }

}

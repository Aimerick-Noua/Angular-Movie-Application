import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number, ...args: any): any {
    const hours = Math.floor(value/60);
    const minutes = value%60;
    return `${hours}h ${minutes}m`;
    
  }

}

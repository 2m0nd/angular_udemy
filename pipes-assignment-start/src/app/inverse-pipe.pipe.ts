import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverse'
})
export class InversePipePipe implements PipeTransform {

  transform(value: string): string {
    if (value.toLowerCase() === 'small') {
      return value.toLowerCase();
    } else if (value.toLowerCase() === 'large') {
      return value.toUpperCase();
    }
    return value;
  }

}

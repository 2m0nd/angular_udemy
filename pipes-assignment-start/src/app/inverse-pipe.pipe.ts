import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverse'
})
export class InversePipePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}

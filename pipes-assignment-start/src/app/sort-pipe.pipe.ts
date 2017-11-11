import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipePipe implements PipeTransform {

  transform(value: any, propertyName: string): any {
    return value.sort((a, b) => {
      const x = a[propertyName].toLowerCase();
      const y = b[propertyName].toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
  }

}

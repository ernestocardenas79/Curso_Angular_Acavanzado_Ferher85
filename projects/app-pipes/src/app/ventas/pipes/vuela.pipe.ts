import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela',
})
export class VuelaPipe implements PipeTransform {
  transform(value: boolean): string {
    console.log('pipe vuela');
    return value ? 'vuela' : 'no vuela';
  }
}

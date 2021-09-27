import { ReturnStatement } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, enMayusculas: boolean = true): String {
    return enMayusculas ? value.toUpperCase() : value.toLowerCase();
  }
}

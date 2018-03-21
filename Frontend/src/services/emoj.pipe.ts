import { Pipe, PipeTransform } from '@angular/core';
// import { twemoji } from 'twemoji/2/twemoji';

@Pipe({
  name: 'twemoji'
})
export class EmojPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    // let out = twemoji.parse(value);
    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // sub string 0 ~ 10 and + ... if character's lenght is greater than limit other wise return value
  transform(value: any, limit: number) {
    if(value.length > limit){
      return value.substr(0, 10) + ' ...';
    }
    return value;
  }

}

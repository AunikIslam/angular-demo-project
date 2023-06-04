import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value[0] == 'adj'){
      return 'Adjective';
    } else if(value[0] == 'n'){
      return 'Noun';
    } else if(value[0] == 'v'){
      return 'Verb';
    }
    
  }

}
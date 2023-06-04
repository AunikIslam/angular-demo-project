import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value[0].includes('adj')){
      return 'Adjective';
    }
    
  }

}
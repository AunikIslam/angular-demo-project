import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(values: any, args?: any): any {
    let title = '';
    values.forEach(pValue => {
      
      if(pValue == 'n'){
        title += 'Noun, '
      }
      else if(pValue == 'adj'){
        title += 'Adjective, '
      }
      else if(pValue == 'v'){
        title += 'Verb, '
      }
    });

    return title.replace(/,\s*$/, "");
    
  }

}
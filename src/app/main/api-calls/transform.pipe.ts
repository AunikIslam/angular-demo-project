import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(values: any, args?: any): any {
    let title = '';
    values.forEach(pValue => {
      if(pValue == 'n' || pValue == 'N'){
        title += 'Noun, '
      }
      else if(pValue == 'adj'){
        title += 'Adjective, '
      }
      else if(pValue == 'v'){
        title += 'Verb, '
      }
      else if(pValue == 'adv'){
        title += 'Adverb, '
      }
    });

    return title.replace(/,\s*$/, "");
    
  }

}
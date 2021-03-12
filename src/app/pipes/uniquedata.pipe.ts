import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniquedata'
})
export class UniquedataPipe implements PipeTransform {

  transform( data :any): string[] {
    
     // var uniqueItems = Array.from(new Set(data)); 
     var uniqueArr = data.filter(function(elem, index, self) {
      return index === self.indexOf(elem);})
    return uniqueArr;

      /*var arr = [];
      for (var i = 0; i < data.length; i++) {
        if (!arr.co(this[i])) {
          arr.push(this[i]);
        }
      }
      return arr;*/
     // console.log(data);
  }
    
  }


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchdata'
})
export class SearchdataPipe implements PipeTransform {

  transform(items: any[], value: string, label:string): any[] {
    debugger;
    console.log(items);
    console.log(value);
    console.log(label);
    if (!items){
      return [];
    } 
    if(value == 'showall') return items;
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter(e => e[label].toLowerCase().indexOf(value.toLowerCase()) > -1 );
    
  }

}

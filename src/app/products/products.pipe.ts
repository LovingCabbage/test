import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? value.filter((item) => {
      if(item.productName.indexOf(args)!==-1) {
        return true;
      }
    }) : value;
  }

}

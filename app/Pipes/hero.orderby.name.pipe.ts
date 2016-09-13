import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "orderby"
})

export class OrderByPipe implements PipeTransform {
  transform(array: Array<any>, args? : any  ) {

    console.log('array (before) : ', array);

    if (array) {

      let orderByValue = args;
      let byVal = 1;

      if (orderByValue.charAt(0) == "!") {

        // reverse the array
        byVal = -1;
        orderByValue = orderByValue.substring(1)
      }

      console.log("byVal", byVal);
      console.log("orderByValue", orderByValue);

      array.sort((a: any, b: any) => {
        if (a[orderByValue] < b[orderByValue]) {
          return -1 * byVal;
        } else if (a[orderByValue] > b[orderByValue]) {
          return 1 * byVal;
        } else {
          return 0;
        }
      });

      console.log('array (after) : ', array);
      return array;
    }
  }
}

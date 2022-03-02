import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let dateFormat = moment(value).format("DD/MM/YYYY");

    if (dateFormat === "Invalid date") {
      dateFormat = value;
    }

    return dateFormat;
  }

}

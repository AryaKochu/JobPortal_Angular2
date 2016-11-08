import {LOCALE_ID, Pipe, PipeTransform, Inject} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipePipe implements PipeTransform {
  datePipe: DatePipe;

  constructor(@Inject(LOCALE_ID) private locale: string) {
    this.datePipe = new DatePipe(locale);
  }

  transform(value: any, args?: any): any {
    let fullTimezone = this.datePipe.transform(value, 'z');
    let rest = this.datePipe.transform(value, 'EEE, MMM dd h:mma');
    let timezone = fullTimezone.match(/[A-Z]/g).join('');
    return `${rest} ${timezone}`;
  }
}

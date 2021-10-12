import { FormControl } from "@angular/forms";

export class DateValidator {
  constructor() {}

  /* dd/mm/aaaa */
  static simpleDate = (control: FormControl) => {
    const simpleDateRegexp = /([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    return simpleDateRegexp.test(control.value) || control.value == ""
      ? null
      : { simpleDate: true };
  }

  /* mm/aaaa */
  static simpleMonthDate = (control: FormControl) => {
    const simpleDateRegexp = /^(0[1-9]|10|11|12)\/20[0-9]{2}$/i;
    return simpleDateRegexp.test(control.value) || control.value == ""
      ? null
      : { simpleMonthDate: true };
  }
}

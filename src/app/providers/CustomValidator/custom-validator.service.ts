import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { RegularExpressions } from '../RegularExpressions/RegularExpressions';
@Injectable({
  providedIn: 'root',
})
export class CustomValidatorService {
  constructor() {}

  static validateNumber(control: AbstractControl) {
    const password = control.value;
    return RegularExpressions.searchNumber.test(password)
      ? null
      : { validateNumber: 'true' };
  }

  static validateDollar(control: AbstractControl) {
    const password = control.value;
    return RegularExpressions.searchDollar.test(password)
      ? null
      : { validateDollar: 'true' };
  }
}

import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function checkEqualityPasswordValidator(controlName1: string, controlName2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
     
      const value1 = control.get(controlName1)?.value;
     
      const value2 = control.get(controlName2)?.value;

      if (!(value1 && value2 && value1 === value2)) {
        return { 'notEqual': { actual: value1, expected: value2 } };
      } else {
        return null;
      }
    };
  }
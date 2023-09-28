import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    const valid = passwordRegex.test(control.value);

    const specialCharacterRegex = /[@$!%*?&]/;
    const hasSpecialCharacter = specialCharacterRegex.test(control.value);

    const lowercaseCharacterRegex = /[a-z]/;
    const hasLowercaseCharacter = lowercaseCharacterRegex.test(control.value);

    const errors: ValidationErrors = {};

    if (!hasSpecialCharacter) {
        errors['missingSpecialCharacter'] = true;
    }

    if (!hasLowercaseCharacter) {
        errors['missingLowercaseCharacter'] = true;
    }

    if (!valid) {
        errors['invalidPassword'] = true
    };

    return Object.keys(errors).length > 0 ? errors : null;
}
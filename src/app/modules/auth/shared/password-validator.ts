import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const valid = passwordRegex.test(control.value);

    const errors = {
        email: {
            rules: 'test email'
        }
    }
    return !valid ? errors : null;
}
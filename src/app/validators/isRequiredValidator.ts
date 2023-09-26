import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isRequiredValidator(controlName1: string, controlName2: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control1 = formGroup.get(controlName1);
    const control2 = formGroup.get(controlName2);

    if (!control1 || !control2) {
      return null; // Si l'un des contrôles n'existe pas, pas de validation
    }

    const value1 = control1.value;
    const value2 = control2.value;

    // Vérifie si l'un des contrôles a une valeur non vide
    if (value1 || value2) {
      return null; // Au moins un contrôle est rempli, pas d'erreur
    }

    return { isRequired: true }; // Les deux contrôles sont vides, erreur isRequired
  };
}
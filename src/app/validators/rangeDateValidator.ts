import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

// Fonction de validation pour le champ "releaseDate" (rangeDate)
export function rangeDateValidator(minYear: number, maxYear: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
  
      if (!value) {
        return null; // Si le champ est vide, pas de validation
      }
  
      const year = new Date(value).getFullYear();
  
      if (year >= minYear && year <= maxYear) {
        return null; // La date est dans la plage autorisée, pas d'erreur
      }
  
      return { min: { minYear, maxYear } }; // La date est en dehors de la plage, erreur min
    };
  }
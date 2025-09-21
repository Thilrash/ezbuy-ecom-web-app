import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function CustomPasswordValidator(): ValidatorFn {
 return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) { return null; } // don't validate empty value

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValidLength = value.length >= 8;
    
    const valid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter && isValidLength;

    return valid ? null : { invalidPassword: true };
 }
}

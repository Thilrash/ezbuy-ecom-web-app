import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function CustomEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return null; // don't validate empty value
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const valid = emailRegex.test(control.value);

        return valid ? null : { invalidEmail: true };
    }
}
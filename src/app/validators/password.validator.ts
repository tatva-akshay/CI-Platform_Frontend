import { AbstractControl, ValidationErrors } from "@angular/forms";

export function PasswordValidator(control: AbstractControl): ValidationErrors | null {
    const minLength = 8;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{8,}$/;

    if (control.value && control.value.length < minLength) {
        return { passwordTooShort: true }; 
    }
    else if(!passwordRegex.test(control.value)) {
        return { passwordInvalid: false}
    }
    return null;
}
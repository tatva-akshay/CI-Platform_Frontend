import { AbstractControl, ValidationErrors } from "@angular/forms";

export function PhoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    const phoneNumberRegex = /^[2-9]{2}[0-9]{8}$/;
    
    if (control.value && !phoneNumberRegex.test(control.value)) {
        return { phoneNumberInvalid: true }; 
    }

    return null;
}
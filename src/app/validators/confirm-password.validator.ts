import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ConfirmPasswordValidator(control : AbstractControl) : ValidationErrors | null {
    let a = control.get('password')
    return control.get('password')?.value === control.get('confirmPassword')?.value ? null : {PasswordMismatch: true}
}
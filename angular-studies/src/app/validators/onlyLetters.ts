import { AbstractControl, ValidationErrors } from "@angular/forms";

export function onlyLetters(control: AbstractControl): ValidationErrors | null {

    const value: string = control.value;

    if(!value) return null;

    const regex = /^[A-Za-zÀ-ÿ\s]+$/;

    const hasNumber = regex.test(value);
    return hasNumber ? null : { onlyLetters: true };
}
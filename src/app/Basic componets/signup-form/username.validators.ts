import {AbstractControl, ValidationErrors, Validators } from '@angular/forms';


export class UsernameValidators{

  cannotContainSpace(control:AbstractControl): ValidationErrors | null{
    if((control.value as string).indexof('') >= 0)

    return{ cannotContainSpace :true };

    return null;

}
}


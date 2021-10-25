import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

// import {
//   emailPattern,
//   nombreApellidoPatter,
//   noPuedeSerStrider,
// } from '../../../shared/validators';
import { ValidatorsService } from '../../../shared/validators/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPatter),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],
      ],
      userName: [
        '',
        [Validators.required, this.validatorService.noPuedeSerStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirmed: ['', Validators.required],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'passwordConfirmed'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.registerForm.reset({
      nombre: 'Ernesto Cardenas',
      email: 'test1@f.com',
      userName: 'calel',
      password: '123456',
      passwordConfirmed: '123456',
    });
  }

  campoNovalido(campo: string) {
    return (
      this.registerForm.get(campo)?.invalid &&
      this.registerForm.get(campo)?.touched
    );
  }

  get emailErrorMsg() {
    const errors = this.registerForm.get('email')?.errors;

    if (errors?.required) return 'Email obligatorio';

    if (errors?.pattern)
      return 'El valor ingresado no tiene formato de correo electronico';

    if (errors?.emailTomado) return 'El email ya fur tomado ';

    return '';
  }

  submit() {
    console.log(this.registerForm.value);
    this.registerForm.markAllAsTouched();
  }
}

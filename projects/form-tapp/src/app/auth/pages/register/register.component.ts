import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  registerForm = this.fb.group({
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
    ],
    userName: [
      '',
      [Validators.required, this.validatorService.noPuedeSerStrider],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService
  ) {}

  ngOnInit(): void {
    this.registerForm.reset({
      nombre: 'Ernesto Cardenas',
      email: 'test1@f.com',
      userName: 'calel',
    });
  }

  campoNovalido(campo: string) {
    return (
      this.registerForm.get(campo)?.invalid &&
      this.registerForm.get(campo)?.touched
    );
  }

  submit() {
    console.log(this.registerForm.value);
    this.registerForm.markAllAsTouched();
  }
}

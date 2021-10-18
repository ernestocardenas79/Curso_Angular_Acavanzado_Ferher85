import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  miFormulario = this.fb.group({
    genero: [, Validators.required],
    notificaciones: [, Validators.required],
  });

  condiciones = this.fb.control(true, Validators.requiredTrue);

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.miFormulario.setValue(this.persona);

    this.miFormulario.valueChanges.subscribe((f) => (this.persona = f));
  }

  guardar() {
    console.log('miFormulario', this.miFormulario.value);

    this.persona = this.miFormulario.value;
  }
}

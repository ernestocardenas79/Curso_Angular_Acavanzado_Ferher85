import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  miFormulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['MetalGear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  getfavoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls.nombre.touched &&
      this.miFormulario.controls.nombre.errors
    );
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) return;

    this.getfavoritosArr().push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );

    this.nuevoFavorito.reset();
  }

  eliminar(i: number) {
    this.getfavoritosArr().removeAt(i);
  }
}

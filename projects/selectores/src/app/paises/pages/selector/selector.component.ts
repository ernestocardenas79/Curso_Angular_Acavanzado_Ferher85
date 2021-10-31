import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, switchMap, tap } from 'rxjs/operators';

import { PaisesService } from '../../../services/paises.service';
import { Country } from '../../interfaces/country.interface';
import { PartialCountry } from '../../interfaces/partialCountry.interface';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styles: [''],
})
export class SelectorComponent implements OnInit {
  miFormulario = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],
  });

  regiones: string[] = [];
  paises: PartialCountry[] = [];
  pais: Country;
  fronteras: Country[] = [];
  cargando = false;

  constructor(private fb: FormBuilder, private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.miFormulario
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.cargando = true;
          this.miFormulario.get('pais')?.reset('');
        }),
        switchMap((region) => this.paisesService.getPaisesPorRegion(region))
      )
      .subscribe((countries) => {
        this.cargando = false;
        this.paises = countries;
      });

    this.miFormulario
      .get('pais')
      ?.valueChanges.pipe(
        tap(() => {
          this.cargando = true;
          this.fronteras = [];
          this.miFormulario.get('frontera').reset('');
        }),
        switchMap((codigo) => this.paisesService.getCountryByCode(codigo)),
        switchMap((country) =>
          this.paisesService.getCountriesByCode(country?.borders)
        )
      )
      .subscribe((countries) => {
        this.cargando = false;
        this.fronteras = countries || [];
      });
  }

  guardar() {}
}

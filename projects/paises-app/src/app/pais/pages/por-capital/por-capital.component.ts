import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'cn-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  hayError = false;
  paises: Country[] = [];

  termino: string;
  constructor(private pasiSrv: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.pasiSrv.buscarCapital(this.termino).subscribe(
      (paises) => (this.paises = paises),
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}

import { Component, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'cn-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`li { cursor:pointer;}`],
})
export class PorPaisComponent implements OnInit {
  hayError = false;
  paises: Country[] = [];
  
  paisesSugeridos: Country[]=[]
  mostrarSugerencias=false;

  termino: string;
  constructor(private pasiSrv: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias=false;
    this.pasiSrv.buscarPais(this.termino).subscribe(
      (paises) => (this.paises = paises),
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError=false;
    this.termino = termino;
    this.mostrarSugerencias=true;
    this.pasiSrv.buscarPais(termino)
      .subscribe(paises=> this.paisesSugeridos= paises.splice(0,5)
                ,_=> this.paisesSugeridos=[])
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}

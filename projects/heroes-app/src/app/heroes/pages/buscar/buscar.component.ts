import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subscription } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnDestroy {
  termino = '';
  heroes: Heroe[] = [];

  heroeSeleccionado!: Heroe | undefined;
  heroeSubs: Subscription;

  constructor(private heroesService: HeroesService) {}

  ngOnDestroy() {
    this.heroeSubs.unsubscribe();
  }
  buscando() {
    this.heroeSubs = this.heroesService
      .getSugerencias(this.termino.trim())
      .subscribe((h) => {
        this.heroes = [];
        if (this.termino.length > 0) {
          this.heroes = h;
        }
      });
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService
      .getHeroePorId(heroe.id)
      .subscribe((h) => (this.heroeSeleccionado = h));
  }
}

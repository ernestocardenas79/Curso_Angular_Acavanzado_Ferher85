import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../paises/interfaces/country.interface';
import { PartialCountry } from '../paises/interfaces/partialCountry.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private _regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private baseUrl = 'https://restcountries.com/v3.1';

  get regiones() {
    return [...this._regiones];
  }
  constructor(private http: HttpClient) {}

  getPaisesPorRegion(region: string) {
    return this.http.get<PartialCountry[]>(`${this.baseUrl}/region/${region}`);
  }

  getCountryByCode(code: string): Observable<Country> | null {
    if (!code) {
      return of(null);
    }
    return this.http
      .get<Country>(`${this.baseUrl}/alpha/${code}`)
      .pipe(map((couontries) => couontries[0]));
  }

  getCountryNameByCode(code: string) {
    return this.http.get<Country>(
      `${this.baseUrl}/alpha/${code}?fields=cca3&fields=name`
    );
  }

  getCountriesByCode(borders: string[]): Observable<Country[]> {
    if (!borders) {
      return of([]);
    }

    const peticiones: Observable<Country>[] = [];

    borders.forEach((codigo) => {
      const peitcion = this.getCountryByCode(codigo);
      peticiones.push(peitcion);
    });

    return combineLatest(peticiones);
  }
}

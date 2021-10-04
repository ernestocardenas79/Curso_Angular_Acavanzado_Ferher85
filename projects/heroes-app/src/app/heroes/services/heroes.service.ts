import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/heroes-app/src/environments/environment';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private basrUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeores() {
    return this.http.get<Heroe[]>(`${this.basrUrl}/heroes`);
  }

  getHeroePorId(id: string) {
    return this.http.get<Heroe>(`${this.basrUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string) {
    return this.http.get<Heroe[]>(
      `${this.basrUrl}/heroes?q=${termino}&_limit=6`
    );
  }
}

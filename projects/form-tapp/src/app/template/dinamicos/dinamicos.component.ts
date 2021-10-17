import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  nuevoJuego = '';

  persona: Persona = {
    nombre: 'Ernesto',
    favoritos: [
      { id: new Date().getTime(), nombre: 'Fifa2010' },
      { id: new Date().getTime(), nombre: 'Halo' },
    ],
  };

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  agregar() {
    const nuevoJuego = {
      id: new Date().getTime(),
      nombre: this.nuevoJuego,
    };

    this.persona.favoritos.push(nuevoJuego);
    this.nuevoJuego = '';
  }

  guardar() {}
}

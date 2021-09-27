import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombre = 'maria';
  genero = 'femenino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes = ['mario', 'ernesto', 'edgar', 'maria'];

  clientesMap = {
    '=0': 'no tenemos ninngun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  borrarCliente() {
    this.clientes.pop();
  }

  cambiarGenero() {
    if (this.genero === 'femenino') {
      this.genero = 'masculino';
      this.nombre = 'Ernesto';
    } else {
      this.genero = 'femenino';
      this.nombre = 'Maria';
    }
  }

  // Keyvalue Pipes
  persona = {
    nombre: 'Ernesto',
    edad: 40,
    direccion: 'Montañas 1495',
  };

  //Json Pipe
  heores = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'robin',
      vuela: false,
    },
    {
      nombre: 'aquaman',
      vuela: false,
    },
  ];

  // Async Pipe

  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Tenemos data de la promesa'), 3000);
  });
}

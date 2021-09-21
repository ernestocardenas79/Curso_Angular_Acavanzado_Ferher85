import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower = 'ernesto';
  nombreUpper = 'ERNESTO';
  nombreCompleto = 'ENEsTO CARdeNas';

  fecha: Date = new Date();
}

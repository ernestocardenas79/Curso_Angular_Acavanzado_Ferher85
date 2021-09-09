import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'cn-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaisTablaComponent implements OnInit {
  @Input() paises: Country[] = [];

  constructor() {}

  ngOnInit(): void {}
}

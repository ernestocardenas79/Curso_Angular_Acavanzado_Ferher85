import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cn-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  termino = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  @Output() onEnter = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  @Input() placeholder = '';

  debouncer: Subject<string> = new Subject();

  buscar() {
    this.onEnter.emit(this.termino);
  }
  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}

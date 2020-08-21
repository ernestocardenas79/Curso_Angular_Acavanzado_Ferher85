import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { DonougthComponent } from './donougth/donougth.component';

@NgModule({
  declarations: [IncrementadorComponent, DonougthComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
  exports: [IncrementadorComponent, DonougthComponent],
})
export class ComponentsModule {}

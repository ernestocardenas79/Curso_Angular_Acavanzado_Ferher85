import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-donougth',
  templateUrl: './donougth.component.html',
  styles: [],
})
export class DonougthComponent {
  @Input() titulo: string;
  @Input() labels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  @Input() data: MultiDataSet = [[]];

  public colors: Color[] = [
    {
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
    },
  ];
}

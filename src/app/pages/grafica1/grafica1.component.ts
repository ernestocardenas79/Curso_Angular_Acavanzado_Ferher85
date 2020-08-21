import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public salesChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public salesChartData: MultiDataSet = [[350, 450, 100]];

  public colors: Color[] = [
    {
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
    },
  ];
  public gastosChartLabels: Label[] = [
    'Download gastos',
    'In-Store Gastos',
    'Mail-Order Gastos ',
  ];

  public gastosChartData: MultiDataSet = [[350, 450, 100]];

  public facturasChartLabels: Label[] = [
    'Download Facturas',
    'In-Store Facturas',
    'Mail-Order Facturas',
  ];

  public facturasChartData: MultiDataSet = [[350, 450, 100]];

  public pendientesChartLabels: Label[] = [
    'Download Pendientes',
    'In-Store Pendientes',
    'Mail-Order Pendientes',
  ];

  public pendientesChartData: MultiDataSet = [[80, 30, 90]];
}

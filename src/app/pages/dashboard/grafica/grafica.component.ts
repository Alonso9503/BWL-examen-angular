import { Component} from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.sass']
})
export class GraficaComponent {

  // Doughnut

  public pieChartLabels: Label[] = ['En venta', 'Servicios', 'Trabajos'];
  public pieChartData: number[] = [40, 30, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgb(123, 230, 143)', 'rgb(234, 229, 61)', 'rgb(216, 82, 52)'],
    },
  ];

}

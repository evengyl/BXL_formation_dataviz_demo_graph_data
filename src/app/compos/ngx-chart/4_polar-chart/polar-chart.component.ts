import { Component } from '@angular/core';
import { multi } from './data'


@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html'
})
export class PolarChartComponent {
  
  multi: any[] = multi

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Années';
  yAxisLabel: string = 'Population';

  colorScheme : any = 'flame'
}

import { Component } from '@angular/core';
import { datas } from './data'


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent {
  multi = datas

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Années';
  yAxisLabel: string = 'Populations';
  timeline: boolean = true;

  colorScheme : any = 'vivid'


}

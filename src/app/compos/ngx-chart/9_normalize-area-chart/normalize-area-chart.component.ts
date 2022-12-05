import { Component } from '@angular/core';
import { datas } from './data'


@Component({
  selector: 'app-normalize-area-chart',
  templateUrl: './normalize-area-chart.component.html'
})
export class NormalizeAreaChartComponent {
  multi: any = datas

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Normalized Population';
  timeline: boolean = true;

  colorScheme : any = 'ocean'

}

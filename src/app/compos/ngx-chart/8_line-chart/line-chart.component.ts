import { Component } from '@angular/core';
import { colorSets } from '../../utils/color-sets';
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

  colorScheme : any = colorSets.find(s => s.name === 'vivid')


  onSelect(data): void {
    console.log('Item clicked', data)
  }

}

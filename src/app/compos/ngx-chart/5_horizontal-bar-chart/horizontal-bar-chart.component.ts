import { Component } from '@angular/core';
import { colorSets } from '../../utils/color-sets';
import { datas } from './data'

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html'
})
export class HorizontalBarChartComponent {
  datas : any[] = datas

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';

  colorScheme : any = colorSets.find(s => s.name === 'ocean')

}

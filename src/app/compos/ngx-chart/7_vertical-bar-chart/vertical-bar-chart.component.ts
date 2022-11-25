import { Component } from '@angular/core';
import { colorSets } from '../../utils/color-sets';
import { datas } from './data'

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html'
})
export class VerticalBarChartComponent {
  multi : any[] = datas

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme : any = colorSets.find(s => s.name === 'ocean')


  onSelect(event) {
    console.log(event);
  }
}

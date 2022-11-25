import { Component } from '@angular/core';
import { colorSets } from '../../utils/color-sets';
import { datas } from './data'

@Component({
  selector: 'app-normalized-vertical-bar-chart',
  templateUrl: './normalized-vertical-bar-chart.component.html'
})
export class NormalizedVerticalBarChartComponent {

  multi: any[] = datas

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;

  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Pays';

  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population normalisée';

  colorScheme : any = colorSets.find(s => s.name === 'ocean')

  onSelect(event) {
    console.log(event);
  }
}

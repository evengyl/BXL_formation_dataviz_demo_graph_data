import { Component } from '@angular/core';
import { colorSets } from '../../utils/color-sets';
import { datas } from './data'


@Component({
  selector: 'app-pie-chart-grid',
  templateUrl: './pie-chart-grid.component.html'
})
export class PieChartGridComponent {
  single: any = datas

  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme : any = colorSets.find(s => s.name === 'vivid')
}

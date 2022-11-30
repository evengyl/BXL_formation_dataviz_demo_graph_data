import { Component } from '@angular/core';
import { colorSets } from '../../utils/color-sets';
import { datas } from './data'


@Component({
  selector: 'app-pie-chart-advanced',
  templateUrl: './pie-chart-advanced.component.html'
})
export class PieChartAdvancedComponent {
  single: any = datas

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme : any = colorSets.find(s => s.name === 'vivid')

}

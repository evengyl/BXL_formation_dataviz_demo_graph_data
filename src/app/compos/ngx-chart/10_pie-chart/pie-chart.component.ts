import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { colorSets } from '../../utils/color-sets';
import { datas } from './data'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent {
  single: any = datas

  gradient: boolean = true
  showLegend: boolean = true
  showLabels: boolean = true
  isDoughnut: boolean = false
  legendPosition: any = LegendPosition.Right

  colorScheme : any = colorSets.find(s => s.name === 'vivid')
}

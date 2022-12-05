import { Component } from '@angular/core';
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
  legendPosition: any = 'right'

  colorScheme : any = 'vivid'
}

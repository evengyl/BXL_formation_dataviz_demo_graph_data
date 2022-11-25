import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { colorSets } from '../../utils/color-sets';
import { data } from "./data"

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html'
})
export class GaugeChartComponent {

  data: any = data
  legend: boolean = true
  legendPosition: LegendPosition = LegendPosition.Right

  colorScheme : any = colorSets.find(s => s.name === 'vivid')

  onSelect(data): void {
    console.log('Item clicked', data)
  }

}

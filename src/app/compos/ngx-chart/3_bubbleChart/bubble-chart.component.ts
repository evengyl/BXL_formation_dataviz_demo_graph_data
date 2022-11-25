import { Component } from '@angular/core';
import { colorSets } from '../../utils/color-sets';
import { bubbleData } from './data'

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html'
})
export class BubbleChartComponent {

  bubbleData: any = bubbleData

  gradient: boolean = false
  showLegend: boolean = true
  
  minRadius: number = 5
  maxRadius: number = 20
  
  xAxisLabel: string = 'Census Date'
  showXAxisLabel: boolean = true
  xScaleMin: number = 2000
  xScaleMax: number = 1900
  
  yAxisLabel: string = 'Life expectancy [years]'
  showYAxisLabel: boolean = true
  yScaleMin: number = 0
  yScaleMax: number = 100

  
  colorScheme : any = colorSets.find(s => s.name === 'vivid')

  onSelect(data): void {
    console.log('Item clicked', data)
  }
}

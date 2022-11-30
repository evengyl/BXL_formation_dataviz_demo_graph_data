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
  maxRadius: number = 15
  
  xAxisLabel: string = 'Année'
  showXAxisLabel: boolean = true
  xScaleMin: number = 1920
  xScaleMax: number = 2025
  
  yAxisLabel: string = 'Prix'
  showYAxisLabel: boolean = true
  yScaleMin: number = 5000
  yScaleMax: number = 30000

  
  colorScheme : any = colorSets.find(s => s.name === 'vivid')
}

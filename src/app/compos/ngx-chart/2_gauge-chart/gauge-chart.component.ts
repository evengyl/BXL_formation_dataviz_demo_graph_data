import { Component } from '@angular/core';
import { data } from "./data"

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html'
})
export class GaugeChartComponent {

  data: any = data
  legend: boolean = true
  legendPosition : any = "right"

  colorScheme : any = 'vivid'
}

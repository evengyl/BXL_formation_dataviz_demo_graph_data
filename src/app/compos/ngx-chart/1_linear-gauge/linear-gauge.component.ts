import { Component } from '@angular/core';

@Component({
  selector: 'app-linear-gauge',
  templateUrl: './linear-gauge.component.html',
})
export class LinearGaugeComponent {

  single: any
  colorScheme : any = 'cool'

  min: number = 0
  max: number = 100
  value : number = 50
  previousValue : number = 100
  units: string = 'Alertes'

}

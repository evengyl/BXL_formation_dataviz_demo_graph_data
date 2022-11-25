import { Component } from '@angular/core';
import { colorSets } from '../../utils/color-sets';

@Component({
  selector: 'app-linear-gauge',
  templateUrl: './linear-gauge.component.html',
})
export class LinearGaugeComponent {

  single: any
  colorScheme : any = colorSets.find(s => s.name === 'cool')

  gaugeMin: number = 0
  gaugeMax: number = 100
  gaugeValue : number = 100
  previousValue : number = 100
  units: string = 'Alertes'

  onSelect(event) {
    console.log("On click sur le chart")
    console.log(event)

    this.updateData()
  }

  updateData() {
    this.gaugeValue = this.gaugeMin + Math.floor(Math.random() * (this.gaugeMax - this.gaugeMin))
  }
}

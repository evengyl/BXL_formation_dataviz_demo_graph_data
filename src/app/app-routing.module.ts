import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from './compos/ngx-chart/10_pie-chart/pie-chart.component';
import { PieChartGridComponent } from './compos/ngx-chart/11_pie-chart-grid/pie-chart-grid.component';
import { PieChartAdvancedComponent } from './compos/ngx-chart/12_pie-chart-advanced/pie-chart-advanced.component';
import { LinearGaugeComponent } from './compos/ngx-chart/1_linear-gauge/linear-gauge.component';
import { GaugeChartComponent } from './compos/ngx-chart/2_gauge-chart/gauge-chart.component';
import { BubbleChartComponent } from './compos/ngx-chart/3_bubbleChart/bubble-chart.component';
import { PolarChartComponent } from './compos/ngx-chart/4_polar-chart/polar-chart.component';
import { HorizontalBarChartComponent } from './compos/ngx-chart/5_horizontal-bar-chart/horizontal-bar-chart.component';
import { NormalizedVerticalBarChartComponent } from './compos/ngx-chart/6_normalized-vertical-bar-chart/normalized-vertical-bar-chart.component';
import { VerticalBarChartComponent } from './compos/ngx-chart/7_vertical-bar-chart/vertical-bar-chart.component';
import { LineChartComponent } from './compos/ngx-chart/8_line-chart/line-chart.component';
import { NormalizeAreaChartComponent } from './compos/ngx-chart/9_normalize-area-chart/normalize-area-chart.component';

const routes: Routes = [
  {path : "1LinearGauge", component : LinearGaugeComponent},
  {path : "2Gauge", component : GaugeChartComponent},
  {path : "3Bubble", component : BubbleChartComponent},
  {path : "4Polar", component : PolarChartComponent},
  {path : "5HoBar", component : HorizontalBarChartComponent},
  {path : "6NormVertBar", component : NormalizedVerticalBarChartComponent},
  {path : "7VertBar", component : VerticalBarChartComponent},
  {path : "8Line", component : LineChartComponent},
  {path : "9NormArea", component : NormalizeAreaChartComponent},
  {path : "10Pie", component : PieChartComponent},
  {path : "11PieGrid", component : PieChartGridComponent},
  {path : "12PieAdvance", component : PieChartAdvancedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

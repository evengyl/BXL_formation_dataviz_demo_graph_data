import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './compos/navbar/nav.component';


import { LinearGaugeComponent } from './compos/ngx-chart/1_linear-gauge/linear-gauge.component';
import { GaugeChartComponent } from './compos/ngx-chart/2_gauge-chart/gauge-chart.component';
import { BubbleChartComponent } from './compos/ngx-chart/3_bubbleChart/bubble-chart.component';
import { PolarChartComponent } from './compos/ngx-chart/4_polar-chart/polar-chart.component';
import { HorizontalBarChartComponent } from './compos/ngx-chart/5_horizontal-bar-chart/horizontal-bar-chart.component';
import { NormalizedVerticalBarChartComponent } from './compos/ngx-chart/6_normalized-vertical-bar-chart/normalized-vertical-bar-chart.component';
import { VerticalBarChartComponent } from './compos/ngx-chart/7_vertical-bar-chart/vertical-bar-chart.component';
import { LineChartComponent } from './compos/ngx-chart/8_line-chart/line-chart.component';
import { NormalizeAreaChartComponent } from './compos/ngx-chart/9_normalize-area-chart/normalize-area-chart.component';
import { PieChartComponent } from './compos/ngx-chart/10_pie-chart/pie-chart.component';
import { PieChartGridComponent } from './compos/ngx-chart/11_pie-chart-grid/pie-chart-grid.component';
import { PieChartAdvancedComponent } from './compos/ngx-chart/12_pie-chart-advanced/pie-chart-advanced.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LinearGaugeComponent,
    GaugeChartComponent,
    BubbleChartComponent,
    PolarChartComponent,
    HorizontalBarChartComponent,
    NormalizedVerticalBarChartComponent,
    VerticalBarChartComponent,
    LineChartComponent,
    NormalizeAreaChartComponent,
    PieChartComponent,
    PieChartGridComponent,
    PieChartAdvancedComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

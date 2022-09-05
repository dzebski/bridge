import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { VelocityWidgetComponent } from './widget-components/velocity-widget/velocity-widget.component';
import { WeatherWidgetComponent } from './widget-components/weather-widget/weather-widget.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const Widgets = [
  WidgetWrapperComponent,
  WeatherWidgetComponent,
  VelocityWidgetComponent,
]

@NgModule({
  declarations: [
    Widgets
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Widgets
  ]
})
export class BridgeWidgetModule {}

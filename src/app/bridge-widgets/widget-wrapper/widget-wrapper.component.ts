import { WidgetInterface } from './../widget-components/widget.interface';
import { WIDGET } from './../widget-components/widget.token';
import { WeatherWidgetComponent } from './../widget-components/weather-widget/weather-widget.component';
import { VelocityWidgetComponent } from './../widget-components/velocity-widget/velocity-widget.component';
import { Component, OnInit, ContentChild } from "@angular/core";

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {

  @ContentChild(WIDGET, { static: true }) widget!: WidgetInterface

  ngOnInit(): void { this.widget.load() }
  onRefresh(): void { this.widget.refresh() }
}

import { WIDGET } from './../widget.token';
import { WidgetInterface } from './../widget.interface';
import { Component } from "@angular/core";

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: WeatherWidgetComponent
  }]
})
export class WeatherWidgetComponent implements WidgetInterface {
  protected isLoading = false

  load() {
    console.log('🌻 Loading Data from Weather API ...')
  }

  refresh() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1500);
  }
}

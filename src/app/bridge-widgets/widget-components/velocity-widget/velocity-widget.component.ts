import { WIDGET } from './../widget.token';
import { WidgetInterface } from './../widget.interface';
import { Component } from "@angular/core";

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: VelocityWidgetComponent
  }]
})
export class VelocityWidgetComponent implements WidgetInterface {
  protected isRefreshing = false

  load() {
    console.log('📖 Loading Data from JIRA API ...')
  }

  refresh() {
    this.isRefreshing = true
    setTimeout(() => {
      this.isRefreshing = false
    }, 2500);
  }
}

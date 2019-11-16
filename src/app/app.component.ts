import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data: number = 1;

  constructor() {}

  toggle() {
    (this.data === 1) ? this.data = -1 : this.data = 1;
  }
}

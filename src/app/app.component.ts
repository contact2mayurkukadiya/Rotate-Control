import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rotate Control Sample';
  angle = 45;

  afterAngleChange(value) {
    console.log("value : ", value);
  }
}

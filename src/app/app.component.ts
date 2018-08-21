import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  simpleOptions: Array<number> = [1, 2, 3, 4];
  objectOptions: Array<any> = [
    {
      id: 1,
      name: 'Julio',
      last_name: 'Guerra'
    },
    {
      id: 2,
      name: 'Cesar',
      last_name: 'Guerra'
    },
    {
      id: 3,
      name: 'Karen',
      last_name: 'Guerra'
    }
  ];
}

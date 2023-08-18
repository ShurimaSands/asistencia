import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Login', url: '/login', icon: 'warning' },
    { title: 'home', url: '/home', icon: 'warning' },
  ];
  public labels = [];
  constructor() {}
}

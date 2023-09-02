import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Cerrar sesion', url: '/login', icon: 'close' },
    
  ];
  public labels = [];
  constructor() {}
}

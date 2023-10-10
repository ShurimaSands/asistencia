import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-resetp',
  templateUrl: './resetp.page.html',
  styleUrls: ['./resetp.page.scss'],
})
export class ResetpPage implements OnInit {
  imagenUrl: string = '/assets/imag/logo.png';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  send(){
    this.router.navigate(['/rest-conf-ps'])
  }
  goBack(){
    this.router.navigate(['/login'])
  }

}

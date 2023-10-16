import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-rest-conf-ps',
  templateUrl: './rest-conf-ps.page.html',
  styleUrls: ['./rest-conf-ps.page.scss'],
})
export class RestConfPsPage implements OnInit {
  imagenUrl: string = '/assets/imag/logo.png';
  constructor(private router: Router) { }

  go(){
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  }

}

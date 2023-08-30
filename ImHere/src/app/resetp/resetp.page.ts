import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-resetp',
  templateUrl: './resetp.page.html',
  styleUrls: ['./resetp.page.scss'],
})
export class ResetpPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['/login'])
  }

}
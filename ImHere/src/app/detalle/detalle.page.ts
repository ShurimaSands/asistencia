import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import {HttpClient} from '@angular/common/http';
import {map } from 'rxjs/operators';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  asislist() {
    this.router.navigate(['/home']);
  }
  backPage() {
    this.router.navigate(['/vista-profesor']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import {HttpClient} from '@angular/common/http';
import {map } from 'rxjs/operators';

@Component({
  selector: 'app-genera',
  templateUrl: './genera.page.html',
  styleUrls: ['./genera.page.scss'],
})
export class GeneraPage implements OnInit {
imagenUrl: string = '/assets/imag/QR.PNG';
  constructor(private router: Router) { }

  ngOnInit() {
  }


  backPage() {
    this.router.navigate(['/detalle']);
  }
}

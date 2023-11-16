import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from "rxjs";

@Component({
  selector: 'app-vista-alumno',
  templateUrl: './vista-alumno.page.html',
  styleUrls: ['./vista-alumno.page.scss'],
})
export class VistaAlumnoPage implements OnInit {

  nombreUsuario: string = '';
  asignaturas: any[] = [];

  constructor(private router: Router,
              private http: HttpClient,
              private usuarioService: UsuarioService
  ) {}
  2
  ngOnInit() {
    this.getAsignaturas();
  }

  getAsignaturas() {
    const url = 'https://prueba1-acdfd-default-rtdb.firebaseio.com/asignatura.json';
    this.http.get(url).pipe(
      catchError((error) => {
        console.error('Error al obtener datos de asignaturas:', error);
        return throwError(error);
      })
    ).subscribe(
      (data: any) => {
        this.asignaturas = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        console.log("SON asignaturas", this.asignaturas);
      }
    );
  }

  verDetalle(asignaturas: any) {
    this.router.navigate(['/home' , {asignaturaDetalle: JSON.stringify(asignaturas)}]);
  }
}

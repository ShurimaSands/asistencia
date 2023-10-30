import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vista-alumno',
  templateUrl: './vista-alumno.page.html',
  styleUrls: ['./vista-alumno.page.scss'],
})
export class VistaAlumnoPage implements OnInit {

  nombreUsuario: string = '';
  asignaturas: any[] = []; 

  constructor(
    private router: Router,
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    // this.getAsignaturas(); 
  }

  // getAsignaturas() {
  //   const url = 'https://imhere-b0357-default-rtdb.firebaseio.com/asignatura/asignatura.json'; 
  //   this.http.get(url).subscribe(
  //     (data: any) => {
  //       this.asignaturas = Object.values(data); 
  //       console.log("SON asignaturas", this.asignaturas);
  //     },
  //     (error) => {
  //       console.error('Error al obtener datos de asignaturas:', error);
  //     }
  //   );
  // }


  // asislist() {
  //   this.router.navigate(['/asislist']);
  // }


}

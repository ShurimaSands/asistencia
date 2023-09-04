import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import {HttpClient} from '@angular/common/http';
import {map } from 'rxjs/operators';
@Component({
  selector: 'app-vista-alumno',
  templateUrl: './vista-alumno.page.html',
  styleUrls: ['./vista-alumno.page.scss'],
})
export class VistaAlumnoPage implements OnInit {

  nombreUsuario: string = ''; // Variable para almacenar el nombre de usuario

  asig: any=[];

  constructor(
    private router: Router,
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  
      ngOnInit() {
        this.nombreUsuario = this.usuarioService.getNombreUsuario(); // Obtén el nombre de usuario al inicializar la página
        this.getAsig().subscribe(res=>{
          console.log("NOMBRE USUARIO:",this.nombreUsuario)
          this.asig= res;


      });
      
      }



          getAsig(){
            return this.http
            .get("assets/files/asignatura.json")
            .pipe(
              map((res:any)=>{
                return res.asignatura

              })
            )

          }
          asislist() {
            this.router.navigate(['/asislist']);
          }
}

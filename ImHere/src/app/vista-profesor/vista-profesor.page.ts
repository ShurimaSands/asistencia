
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import {HttpClient} from '@angular/common/http';
import {map } from 'rxjs/operators';


@Component({
  selector: 'app-vista-profesor',
  templateUrl: './vista-profesor.page.html',
  styleUrls: ['./vista-profesor.page.scss'],
})
export class VistaProfesorPage implements OnInit {
  nombreUsuario: string = '';
  asig: any=[];

  constructor(
    private router: Router,
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.nombreUsuario = this.usuarioService.getNombreUsuario(); // Obtén el nombre de usuario al inicializar la página
    this.getAsig().subscribe(res=>{
      console.log("SON REGIONES",res)
      this.asig= res;


    });
  }

  getAsig(){
    return this.http
      .get("assets/files/asignaturap.json")
      .pipe(
        map((res:any)=>{
          return res.asignatura

        })
      )

  }
  asislist() {
    this.router.navigate(['/home-prof']);
  }
}


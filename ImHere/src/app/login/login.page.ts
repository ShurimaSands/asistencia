import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user = {
    usuario: "",
    password: ""
  };

  constructor( 
                private router: Router,
                private usuarioService: UsuarioService
                ) { }

  ngOnInit() {
    console.log("HOLA!");
   
  }



  iniciarSesion() {

    this.usuarioService.setNombreUsuario(this.user.usuario);

 
    this.router.navigate(['/home']);
  }
}

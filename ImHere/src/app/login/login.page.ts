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
    usuario: '',
    password: '',
  };

  mensajeError: string = '';
  imagenUrl: string = '/assets/imag/logo.png';

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    console.log('HOLA!');
  }

  iniciarSesion() {
    const usuarioEncontrado = this.usuarioService.validarCredenciales(
      this.user.usuario,
      this.user.password
    );

    if (usuarioEncontrado) {
      // Redirigir al usuario a la vista correspondiente según el tipo
      if (usuarioEncontrado.tipo === 'alumno') {
        this.router.navigate(['/vista-alumno']);
      } else if (usuarioEncontrado.tipo === 'profesor') {
        this.router.navigate(['/vista-profesor']);
      }
    } else {
      // Mostrar un mensaje de error si las credenciales son incorrectas
      this.mensajeError = 'Credenciales ingresadas incorrectas';
    }
  }

  resetPass() {
    this.router.navigate(['/resetp']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios = [
    { usuario: 'alumno1', password: 'contrasena1', tipo: 'alumno' },
    { usuario: 'profesor1', password: 'contrasena2', tipo: 'profesor' },
    // Agrega más usuarios si es necesario
  ];

  user = {
    usuario: '',
    password: '',
  };

  mensajeError: string = '';
  imagenUrl: string = '/assets/imag/logo.png';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('HOLA!');
  }

  iniciarSesion() {
    // Buscar el usuario ingresado en la lista de usuarios en duro
    const usuarioEncontrado = this.usuarios.find(
      (u) => u.usuario === this.user.usuario && u.password === this.user.password
    );

    if (usuarioEncontrado) {
      // Redirigir al usuario a la vista correspondiente según el tipo
      if (usuarioEncontrado.tipo === 'alumno') {
        this.router.navigate(['/vista-alumno']);
      } else if (usuarioEncontrado.tipo === 'profesor') {
        this.router.navigate(['/vista-profesor']);
      }
    } else {
      // Mostrar un mensaje de error si el usuario no se encuentra
      this.mensajeError = 'Credenciales ingresadas incorrectas';
    }
  }

  resetPass() {
    this.router.navigate(['/resetp']);
  }
}

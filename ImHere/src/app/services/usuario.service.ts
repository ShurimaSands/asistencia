import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private nombreUsuario: string = '';

  private usuarios = [
    { usuario: 'alumno1', password: 'contrasena1', tipo: 'alumno' },
    { usuario: 'profesor1', password: 'contrasena2', tipo: 'profesor' },
    // Agrega más usuarios si es necesario
  ];

  constructor() { }

  validarCredenciales(usuario: string, password: string) {
    return this.usuarios.find(
      (u) => u.usuario === usuario && u.password === password
    );
  }

  setNombreUsuario(nombre: string) {
      this.nombreUsuario = nombre;
      console.log('Nombre de usuario establecido:', nombre);
  }

  getNombreUsuario(): string {
      console.log('Obteniendo nombre de usuario:', this.nombreUsuario);
      return this.nombreUsuario;
  }
}

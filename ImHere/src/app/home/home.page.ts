import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreUsuario: string = ''; // Variable para almacenar el nombre de usuario

  constructor(
    
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.nombreUsuario = this.usuarioService.getNombreUsuario(); // Obtén el nombre de usuario al inicializar la página
  }


}

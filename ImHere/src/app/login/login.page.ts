import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../models/user.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  
  mensajeError: string = '';
  imagenUrl: string = '/assets/imag/logo.png';

  constructor(private router: Router, 
              private firebaseSvc: FirebaseService
              ) {}





  
  ngOnInit() {
    console.log('HOLA!');
  }







  submit (){
    if (this.form.valid){
      this.firebaseSvc.signIn(this.form.value as User).then(res =>{
        console.log(res);

        // Extrae el dominio del correo electrónico
        const email = this.form.get('email').value;
        const domain = email.split('@')[1];

        // Redirecciona basado en el dominio
        if (domain === 'duocuc.cl') {
          this.router.navigate(['/vista-alumno']); // Redirige a la vista de alumno
        } else if (domain === 'profesor.duoc.cl') {
          this.router.navigate(['/vista-profesor']); // Redirige a la vista de profesor
        } else {
          console.error('Dominio de correo no reconocido');
        }
      })
    }
  }

  resetPass() {
    this.router.navigate(['/resetp']);
  }
}

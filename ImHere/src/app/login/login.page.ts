import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../models/user.models';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  spinner: boolean = false;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  imagenUrl: string = '/assets/imag/logo.png';

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('HOLA!');
  }

  go() {
    this.router.navigate(['/resetp']);
  }

  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();
      this.firebaseSvc.signIn(this.form.value as User).then(res => {
        console.log(res);
        localStorage.setItem('currentUserId', res.user.uid);
        this.getUserInfo(res.user.uid);
      }).catch(error => {
        console.log(error);
        this.utilsSvc.presentToast({
          message: 'Usuario o contraseña incorrectos',
          duration: 2900,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        });
      }).finally(() => {
        loading.dismiss();
      });
    }
  }

  async getUserInfo(uid: string) {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();
      let path = `user/${uid}`;
      this.firebaseSvc.getDocument(path).then((user: User) => {
        this.utilsSvc.saveInLocalStorage('user', user);

        // Lógica condicional para redirigir a la página adecuada
        if (user.email === 'shipporeyes@gmail.com') {
          this.utilsSvc.routerLink('/vista-profesor');
        } else {
          this.utilsSvc.routerLink('/vista-alumno');
        }

        this.form.reset();
        this.utilsSvc.presentToast({
          message: `Te damos la bienvenida ${user.name}`,
          duration: 1500,
          color: 'primary',
          position: 'middle',
          icon: 'person-circule-outline'
        });
      }).catch(error => {
        console.log(error);
        this.utilsSvc.presentToast({
          message: 'El usuario o contraseña son incorrectos',
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circule-outline'
        });
      }).finally(() => {
        loading.dismiss();
      });
    }
  }
}

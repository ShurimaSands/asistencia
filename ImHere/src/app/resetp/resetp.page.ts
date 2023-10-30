import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../models/user.models';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-resetp',
  templateUrl: './resetp.page.html',
  styleUrls: ['./resetp.page.scss'],
})
export class ResetpPage implements OnInit {
  spinner: boolean = false;
  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
   
  })


  mensajeError: string = '';
  imagenUrl: string = '/assets/imag/logo.png';

  // constructor(private router: Router,
  //             private firebaseSvc: FirebaseService
  //             ) {}


    firebaseSvc = inject(FirebaseService);
    utilsSvc= inject(UtilsService);
    
    constructor(
      private router: Router
    ) { }


  ngOnInit() {
    console.log('HOLA!');
  }



  go(){
    this.router.navigate(['/resetp'])
  }


    async submit (){
      if (this.form.valid){

        const loading = await this.utilsSvc.loading();
        await loading.present();


        this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(res =>{
          console.log(res);

       

        }).catch(error =>{
          console.log(error);

          this.utilsSvc.presentToast({

            message: 'Usuario o contraseña incorrectos',
            duration: 2900,
            color: 'primary',
            position: 'middle',
            icon:'alert-circle-outline'

          })

        }).finally(() =>{
          loading.dismiss();

        })

      }


    }


}
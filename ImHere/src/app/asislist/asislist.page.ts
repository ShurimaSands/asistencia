import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { UtilsService } from "../services/utils.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asislist',
  templateUrl: './asislist.page.html',
  styleUrls: ['./asislist.page.scss'],
})
export class AsislistPage implements OnInit, OnDestroy {
  scannedResult: any[] = [];
  subscription: Subscription | undefined;

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.getScanned();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async getScanned() {
    const loading = await this.utils.loading();
    await loading.present();
    try {
      const uid = localStorage.getItem('currentUserId');
      console.log('UID:', uid);
      if (uid) {
        const path = `scannedQR`;
        console.log('Path:', path);
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
        this.subscription = this.firestore.collection<any>(path).valueChanges().subscribe((data: any[]) => {
          console.log('Datos obtenidos:', data);
          this.scannedResult = data.map(item => ({
            ...item,
            timestamp: item.timestamp.toDate()
          }));
        });
      } else {
        console.log('No se pudo obtener el UID del usuario');
      }
    } catch (error) {
      console.error(error);
      this.utils.presentToast({
        message: 'Error al obtener los resultados del escaneo de QR.',
        duration: 2500,
        color: 'primary',
        position: 'middle',
        icon: 'alert-circle-outline'
      });
    } finally {
      console.log('Fin de getScanned');
      loading.dismiss();
    }
  }

  backPage() {
    this.router.navigate(['/vista-alumno']);
  }
}

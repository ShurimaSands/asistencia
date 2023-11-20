import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import * as JsBarcode from 'jsbarcode';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-prof',
  templateUrl: './home-prof.page.html',
  styleUrls: ['./home-prof.page.scss'],
})
export class HomeProfPage implements OnInit {
  qrCodeString = ''; // Cambiado a cadena vacía
  barCodeString = '12345566765';
  scannedResult: any;
  content_visibility = '';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {}

  ionViewDidEnter(): void {
    JsBarcode("#barcode", this.barCodeString, {
      lineColor: "#0aa",
      width: 4,
      height: 200,
      displayValue: false
    });
  }

  async enterQRContent() {
    const alert = await this.alertController.create({
      header: 'Ingrese el contenido del código QR',
      inputs: [
        {
          name: 'qrContent',
          type: 'text',
          placeholder: 'Contenido del código QR',
          value: this.qrCodeString // Para mostrar el valor actual
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Guardar',
          handler: (data) => {
            this.qrCodeString = data.qrContent;
            JsBarcode("#barcode", this.qrCodeString, {
              lineColor: "#0aa",
              width: 4,
              height: 200,
              displayValue: false
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async checkPermission() {
    try {
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy(): void {
    this.stopScan();
  }

  backPage(){
    this.router.navigate(['/vista-profesor'])
  }

  GoList(){
    this.router.navigate(['/detalle'])
  }
}

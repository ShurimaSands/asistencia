import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import * as JsBarcode from 'jsbarcode';
import {ActivatedRoute, Router} from "@angular/router";
import { QrDataService } from '../services/qr-data.service';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  // https://www.npmjs.com/package/angularx-qrcode
  // https://www.npmjs.com/package/jsbarcode
  qrCodeString = 'Programación Movil';
  barCodeString = '12345566765';
  scannedResult: any;
  // barScannedResult: any;
  content_visibility = '';
  asignaturaActual: string = '';
  constructor(
    // private barcodeScanner: BarcodeScanner
    private router: Router,
    private qrDataService: QrDataService,
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const asignaturaDetalle = this.route.snapshot.paramMap.get('asignaturaDetalle');
    if (asignaturaDetalle) {
      this.asignaturaActual = JSON.parse(asignaturaDetalle);
    }
  }
  ionViewDidEnter(): void {
    JsBarcode("#barcode", this.barCodeString, {
      lineColor: "#0aa",
      width: 4,
      height: 200,
      displayValue: false
    });
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

      if (result?.hasContent) {
        this.scannedResult = result.content;
        this.asignaturaActual = 'programacion'
        const uid = localStorage.getItem('currentUserId'); // -> recupera el uid del usuario logeado
        this.qrDataService.addScannedResult(this.scannedResult);
        if (uid){
          this.firestore.collection('scannedQR').doc(uid).set({
            code: this.scannedResult,
            timestamp: new Date()
          })
        }
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
    this.router.navigate(['/vista-alumno'])
  }
  GoList(){
    this.router.navigate(['/asislist'])
  }
}

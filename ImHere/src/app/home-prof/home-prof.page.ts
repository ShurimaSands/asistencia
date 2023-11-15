import { Component, OnInit } from '@angular/core';
// import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import * as JsBarcode from 'jsbarcode';
import {Router} from "@angular/router";
@Component({
  selector: 'app-home-prof',
  templateUrl: './home-prof.page.html',
  styleUrls: ['./home-prof.page.scss'],
})
export class HomeProfPage implements OnInit {
  // https://www.npmjs.com/package/angularx-qrcode
  // https://www.npmjs.com/package/jsbarcode
  qrCodeString = 'Programación Movil';
  barCodeString = '12345566765';
  scannedResult: any;
  // barScannedResult: any;
  content_visibility = '';
  constructor(private router: Router) { }

  ngOnInit() {

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


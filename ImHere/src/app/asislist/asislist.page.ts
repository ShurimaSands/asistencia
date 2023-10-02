import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import {Router} from "@angular/router";
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-asislist',
  templateUrl: './asislist.page.html',
  styleUrls: ['./asislist.page.scss'],
})
export class AsislistPage implements OnInit {
  qrCodeString = 'This is a secret qr code message';
  barCodeString = '12345566765';
  scannedResult: any;
  // barScannedResult: any;
  content_visibility = '';



  imageSource: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
     this.imageSource=image.dataUrl;

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

  backPage() {
    this.router.navigate(['/vista-alumno']);
  }
}

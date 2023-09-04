import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import {Router} from "@angular/router";

@Component({
  selector: 'app-asislist',
  templateUrl: './asislist.page.html',
  styleUrls: ['./asislist.page.scss'],
})
export class AsislistPage implements OnInit {
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

  backPage() {
    this.router.navigate(['/vista-alumno']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-asislist',
  templateUrl: './asislist.page.html',
  styleUrls: ['./asislist.page.scss'],
})
export class AsislistPage implements OnInit {
  imageSource: any;
  constructor() { }

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
}

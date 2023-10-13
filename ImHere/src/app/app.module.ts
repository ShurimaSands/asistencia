import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';


//======Firebase=====
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
@NgModule({
  declarations: [AppComponent],

  imports: [BrowserModule, 
            IonicModule.forRoot({mode: 'md'}), 
            AppRoutingModule,
            HttpClientModule,
            AngularFireModule.initializeApp(environment.firebaseConfig)],

   providers: [
              { provide: RouteReuseStrategy, 
                useClass: IonicRouteStrategy },
                // BarcodeScanner
                UsuarioService
            ],

  bootstrap: [AppComponent],
})
export class AppModule {}

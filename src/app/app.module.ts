import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPlacePage } from '../pages/new-place/new-place';
import { PlacesService } from './services/place.services';
import {Geolocation} from '@ionic-native/geolocation'; //please put any type of services in the app module , the tutorials sometimes give wrong info
import {PlacePage} from '../pages/place/place';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({ //solved the injectable storage issues
      name: '__my-places',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }), //<-add this
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVhygq8Xpy6h__9Lsi2-Ml2Fd4dYdTVoA'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService,Geolocation,
  ]
})
export class AppModule {}

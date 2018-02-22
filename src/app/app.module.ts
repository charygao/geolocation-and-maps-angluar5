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
import { SchedulerService } from './services/scheduler-data-service';
import {Geolocation} from '@ionic-native/geolocation'; //please put any type of services in the app module , the tutorials sometimes give wrong info
import {PlacePage} from '../pages/place/place';
import { AgmCoreModule } from '@agm/core';
import {MenuComponent} from '../components/menu/menu';
import {MenuToggleComponent} from '../components/menu-toggle/menu-toggle';
import {SharedModule} from './shared/shared.module';
import { FileTransfer, FileUploadOptions , FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import {FilePath} from '@ionic-native/file-path';
import { EmailComposer } from '@ionic-native/email-composer';
import { SendEmailComponent } from '../components/send-email/send-email';
import { ZipUploadComponent } from '../components/zip-upload/zip-upload';
import { ComponentsModule } from '../components/components.module';
import { PlacePageModule } from '../pages/place/place.module';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { GoogleWaypointsPage } from '../pages/google-waypoints/google-waypoints';
import { DayThreeComponent } from '../components/day-three/day-three';
import {CalendarModule} from 'angular-calendar';
import { NgbModule , NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScheduleModule} from 'primeng/schedule';
import { AngularGoogleSchedulerPage } from '../pages/angular-google-scheduler/angular-google-scheduler';
import { DxTemplateModule,DxSchedulerComponent ,DxButtonModule , DevExtremeModule, DxResponsiveBoxModule , DxSchedulerModule, DxMapModule } from 'devextreme-angular';
import { DevextremeMapsPage } from '../pages/devextreme-maps/devextreme-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    GoogleWaypointsPage,
    PlacePage,
    SendEmailComponent,
    ZipUploadComponent,
    DayThreeComponent,
    AngularGoogleSchedulerPage,
    DevextremeMapsPage
    //ComponentsModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScheduleModule,
    IonicModule.forRoot(MyApp),
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    DevExtremeModule,
    DxResponsiveBoxModule,
    DxButtonModule,
    DxSchedulerModule,
    DxMapModule,
    DxTemplateModule,
    IonicStorageModule.forRoot({ //solved the injectable storage issues
      name: '__my-places',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }), //<-add this
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVhygq8Xpy6h__9Lsi2-Ml2Fd4dYdTVoA'
    }),
    SharedModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage,
    SendEmailComponent,
    GoogleWaypointsPage,
    DayThreeComponent,
    AngularGoogleSchedulerPage,
    DevextremeMapsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService,
    SchedulerService,
    Geolocation,
    FileTransfer,
    FileTransferObject,
    File,
    FileChooser,
    FilePath,
    EmailComposer,
    GoogleMaps
  ]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
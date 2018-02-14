import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleWaypointsPage } from './google-waypoints';

@NgModule({
  declarations: [
    GoogleWaypointsPage,
  ],
  imports: [
    IonicPageModule.forChild(GoogleWaypointsPage),
  ],
})
export class GoogleWaypointsPageModule {}

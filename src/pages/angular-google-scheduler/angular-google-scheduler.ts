import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchedulerService , Appointment} from '../../app/services/scheduler-data-service';
import {DxSchedulerModule} from 'devextreme-angular';
import * as $ from 'jquery';
/**
 * Generated class for the AngularGoogleSchedulerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on https://js.devexpress.com/Documentation/Guide
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-angular-google-scheduler',
  templateUrl: 'angular-google-scheduler.html',
})
export class AngularGoogleSchedulerPage {
  appointmentsData: Appointment[];
    currentDate: Date = new Date(2018, 4, 23);
    daysViewStartDate: Date = new Date(2018, 3, 30);
    showCurrentTimeIndicator = true;
    shadeUntilCurrentTime = true;
  constructor(public navCtrl: NavController, public navParams: NavParams , private sch: SchedulerService) {
    this.appointmentsData = this.sch.getAppointments(); //dummy data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AngularGoogleSchedulerPage');
    console.log($);
    $(document).ready(function () {
      // jQuery methods go here...
      console.log("JQuery is ready");
      $(function () {
        $("#sliderContainer")['0'].ondrag(function(e){
          console.log(e);
          e.dxScrollView({
            useNative: true
          });
        });
        $(function () {
          $("sliderContainer").dxSlider({
            min: 0, max: 100,
            value: 25,
            step: 10
          });
        });
      });
    });
  }

}

import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchedulerService , Appointment} from '../../app/services/scheduler-data-service';
import { DxButtonComponent , DxSchedulerComponent} from 'devextreme-angular';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
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
  @ViewChild(DxSchedulerComponent) scheduler: DxSchedulerComponent;
  appointmentsData: Appointment[];
    currentDate: Date = new Date();
    //daysViewStartDate: Date = new Date(2018, 3, 30);
    showCurrentTimeIndicator = true;
    shadeUntilCurrentTime = true;
    title:any;
  constructor(public navCtrl: NavController, public navParams: NavParams , private sch: SchedulerService) {
    this.appointmentsData = this.sch.getAppointments(); //dummy data
    console.log(this.scheduler);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AngularGoogleSchedulerPage');
    console.log($);//push test
    this.title = "Angular 4 with JQuery";
    $(document).ready(function () {
      // jQuery methods go here...
      var scrollViewWidget;
      console.log("JQuery is ready", $('#scrollview'));
     /*   $(function () {
              scrollViewWidget = $("#scrollview").dxScrollView({
              scrollByContent: true,
              scrollByThumb: true,
              showScrollbar: "onScroll",
              reachBottomText: "Updating..."
            }).dxScrollView("instance");
          });*/
          console.log(scrollViewWidget)
        });
  }
  onContentReady(e) {
    var currentHour = new Date();
    e.component.scrollToTime(currentHour.getHours(), currentHour.getMinutes() , new Date());
}
onAddingAppointment(e){
  console.log("Adding Appointments " ,e);
}
onAppointmentUpdating(e){
  console.log("On Appointment Update " ,e);
}
onCellClick(e){
  console.log(e);
  e.cancel = true;
}
  toggleTitle= ()=>{ // JQuery Sucks but have a rich library
    console.log($);
    console.log($('title'));
    $('.title').slideToggle();
  }
}

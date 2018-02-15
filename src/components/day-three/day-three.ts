import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  selector:'day-three',
  templateUrl:'day-three.html'
  //styleUrls:['']
})
export class DayThreeComponent {


  events: any[];
  headerConfig = {
    left:   'title',
    center: '',
    right:  'today prev,next'
}
headerConfig2 = {
  left:   'today , prev,next',
  center: '',
  right: 'month,agendaWeek,timelineThreeDays'
}
  ngOnInit() {
      this.events = [
          {
              "title": "All Day Event",
              "start": "2018-02-01"
          },
          {
              "title": "Long Event",
              "start": "2018-02-07",
              "end": "2018-05-10"
          },
          {
              "title": "Repeating Event",
              "start": "2018-02-11T16:00:00"
          },
          {
              "title": "Repeating Event",
              "start": "2016-01-16T16:00:00"
          },
          {
              "title": "Conference",
              "start": "2018-01-11",
              "end": "2018-01-13"
          }
      ];
  }
  
}
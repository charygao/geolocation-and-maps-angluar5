import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DxMapModule, DxSelectBoxModule } from 'devextreme-angular';
/**
 * Generated class for the DevextremeMapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devextreme-maps',
  templateUrl: 'devextreme-maps.html',
})
export class DevextremeMapsPage {
  markers = [{
    location: "40.7825, -73.966111"
}, {
    location: [40.755833, -73.986389]
}, {
    location: {
        lat: 40.753889,
        lng: -73.981389
    }
}, {
    location: "Brooklyn Bridge,New York,NY"
}];

routes = [{
    weight: 6,
    color: "blue",
    opacity: 0.5,
    mode: "driving",
    locations: [
        [40.782500, -73.966111],
        [40.755833, -73.986389],
        [40.753889, -73.981389],
        "Brooklyn Bridge,New York,NY"
    ]

}];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevextremeMapsPage');
  }
  setMode(e) {
    this.routes = this.routes.map(function(item) {
        item.mode = e.value; //can come from use input
        return item;
    });
}
selectColor(e) {
    this.routes = this.routes.map(function(item) {
        item.color = e.value;
        return item;
    });
}
}

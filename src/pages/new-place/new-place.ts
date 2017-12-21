import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlacesService} from '../../app/services/place.services';
import { Geolocation } from '@ionic-native/geolocation';
import { Place } from '../../model/place.model';
/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
public location: {lat:number , lng:number} = {lat: 0 , lng: 0};
// had to forcefully inject geolcation services in app module
  constructor(public navCtrl: NavController, public navParams: NavParams , private ps: PlacesService , private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }
  addPlace(value: {title: string}): void {
    console.log(this.location);
    this.ps.addPlaces({title:value.title, location:this.location});
    this.navCtrl.pop(); // go back to the root page
  }

  onLocateUser(){
    //returns a promise
    console.log(this.geolocation);
    this.geolocation.getCurrentPosition().then((location)=>{
        console.log("Current Location: " , location);
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
      }).catch((error)=>{
            console.log(error);
      });
  }
}

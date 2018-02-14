import { Component , ViewChild , ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
 } from '@ionic-native/google-maps';
/**
 * Generated class for the GoogleWaypointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-google-waypoints',
  templateUrl: 'google-waypoints.html',
})
export class GoogleWaypointsPage {
  public map:GoogleMap;
  public location:LatLng;
  @ViewChild('map') private divMap: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams , public platform:Platform , private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleWaypointsPage');
    console.log(this.divMap.nativeElement);
    setTimeout(()=>{
      this.loadMap();
    },1000);
  }
  loadMap(){
    
    let location = new LatLng(-34.9290,138.6010); // to make a manual way point this class can be an array

    let mapOptions: GoogleMapOptions = {
      camera:{
        target:{lat: 37.422359, lng: -122.084344},
      zoom: 18,
      tilt:30
      }
    };
    this.map = this.googleMaps.create(this.divMap.nativeElement , mapOptions);
    console.log(this.map.getDiv());
    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
        console.log('Map is ready!');
        this.map.addMarker({
          title:'WayPoints',
          icon:'blue',
          animation: 'DROP',
          position: {
            lat: 37.422359, lng: -122.084344
          }
        }).then((marker:any)=>{
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(()=>{
            console.log("Marker Click");
          });
        });
        console.log(this.map);
    });
  }
  
}

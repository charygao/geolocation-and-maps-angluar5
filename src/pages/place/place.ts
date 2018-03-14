import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage implements OnInit{
  lat:number;
  lng:number;
  zoom:number;
  searchControl :FormControl;
  nativeHomeInputBox:HTMLInputElement
  @ViewChild('search') searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, public navCtrl: NavController, public navParams: NavParams , private viewCtrl: ViewController) {
    this.lat = this.navParams.data.location.lat;
    this.lng = this.navParams.data.location.lng;
  }
  ngOnInit(){
    this.searchControl = new FormControl();
    //const nativeHomeInputBox:HTMLInputElement = this.searchElementRef.nativeElement.getElementsByTagName('input')[0]; //back to the old ways SADDDDDDDDDD!!!!!
    //nativeHomeInputBox:HTMLInputElement = document.getElementById("fucking-stupid").getElementsByTagName('input')[0]; //back to the old ways SADDDDDDDDDD!!!!!

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      //fucking ionic add a fucking wrapper to the DOM element which confuses the args for google maps loader
      //let autocomplete1 = new google.maps.places.Autocomplete(nativeHomeInputBox, searchOptions);
      console.log("Ready" , this.nativeHomeInputBox);
      let autocomplete = new google.maps.places.Autocomplete(this.nativeHomeInputBox, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(place);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat= place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
    this.nativeHomeInputBox = document.getElementById("fucking-stupid").getElementsByTagName('input')[0]; //back to the old ways SADDDDDDDDDD!!!!!
    console.log(this.nativeHomeInputBox);
  }
  dimissPlaceModal(){
    //view controller controls the view, so when we use a modalCtrl(basically and overlay) to pop up a new page , we use to view controller to go back to the previous page,
    //i'm gussing the view controller maintains some sort of internal stack to keep track of pages , why isn't the NavController taking car of this ??????
    this.viewCtrl.dismiss();
  }
}

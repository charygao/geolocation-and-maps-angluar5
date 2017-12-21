import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';
import {NewPlacePage} from '../new-place/new-place';
import {PlacesService} from '../../app/services/place.services';
import {PlacePage} from '../place/place';
import {Place} from '../../model/place.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public places: Place[] = [];
  constructor(public navCtrl: NavController , private ps: PlacesService , private modalCtrl: ModalController) {

  }
  //hooks
  ionViewWillEnter(){
    //using promises to read from local storage
    this.ps.getPlaces().then(
    (data)=>{
      this.places = data;
      console.log(this.places.length);
    });
  }
  newPlacePage(){
    this.navCtrl.push(NewPlacePage); //navigation concept add the component to render
  }
//  openPlaceInMaps(place:{title: string}):void{
    //console.log("Clicked: " , place.title);
  //}
  //sliding up using a modalCtrl , like a quick page to be dismiss
  openPlaceInMaps(place:Place){
    //the second argument to the modalCtrl is the data we want to pass to the modalCtrl view
    this.modalCtrl.create(PlacePage , place).present();
  }
  deletePlaces(){
    if(this.places.length == 0){
      console.log("Already clear local storage , please save your yourself from this expensive operation smiley face :)");
    }else{
      this.ps.removePlaces().then(
        (empty)=>{
            this.places = [];
        });
    }
  }
}

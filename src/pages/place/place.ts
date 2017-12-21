import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';

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
export class PlacePage {
  lat:number;
  lng:number;

  constructor(public navCtrl: NavController, public navParams: NavParams , private viewCtrl: ViewController) {
    this.lat = this.navParams.data.location.lat;
    this.lng = this.navParams.data.location.lng;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }
  dimissPlaceModal(){
    //view controller controls the view, so when we use a modalCtrl(basically and overlay) to pop up a new page , we use to view controller to go back to the previous page,
    //i'm gussing the view controller maintains some sort of internal stack to keep track of pages , why isn't the NavController taking car of this ??????
    this.viewCtrl.dismiss();
  }
}

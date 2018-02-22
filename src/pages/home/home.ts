import { Component } from '@angular/core';
import { NavController , ModalController  , MenuController } from 'ionic-angular';
import {NewPlacePage} from '../new-place/new-place';
import {PlacesService} from '../../app/services/place.services';
import {PlacePage} from '../place/place';
import {Place} from '../../model/place.model';
import {MenuComponent} from '../../components/menu/menu';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileUtils } from '../../app/util/utilities';
import { FileChooser } from '@ionic-native/file-chooser';
import {FilePath} from '@ionic-native/file-path';
import { SendEmailComponent } from '../../components/send-email/send-email';
import { GoogleWaypointsPage } from '../google-waypoints/google-waypoints';
import { DayThreeComponent } from '../../components/day-three/day-three';
import { AngularGoogleSchedulerPage } from '../angular-google-scheduler/angular-google-scheduler';
import { DevextremeMapsPage } from '../devextreme-maps/devextreme-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public places: Place[] = [];
  public val:boolean;
  
  constructor(public menu: MenuController , public navCtrl: NavController , private ps: PlacesService , 
    private modalCtrl: ModalController , public fileTransfer: FileTransfer , private filePath:FilePath) {
    this.menu.enable(true);
    this.val = false;
    console.log(this.fileTransfer);
    //console.log()
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
  openEmailPage(){
    this.navCtrl.push(SendEmailComponent);
  }
  openGoogleMaps(){
    this.navCtrl.push(GoogleWaypointsPage);
  }
  openDayThree(){
    this.navCtrl.push(DayThreeComponent);
  }
  openAngularScheduler(){
    this.navCtrl.push(AngularGoogleSchedulerPage);
  }
  openAngularDxMaps(){
    this.navCtrl.push(DevextremeMapsPage);
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
  public uploadFile =()=>{
      FileUtils.getFileUtilInstance() // this will be initialise once in the Class field section
      FileUtils.openFileChooser().then(uri=>{
        this.filePath.resolveNativePath(uri).then(filePath=>{
          console.log(filePath);
        }).catch(e=>console.log(e));
      }).catch(e=>console.log(e));
  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Place } from '../../model/place.model';

@Injectable()
export class PlacesService {
  private places: Place[] = [];

  constructor(private storage: Storage){
    //Storage is a service if you dont add to the app module you get an injectable error , very importtant
  }

  addPlaces(place:Place){
    this.places.push(place);
    this.storage.set('places' , this.places); // notice the key value pair, document based DB ???
  }
  removePlaces(){
    return this.storage.remove('places').then((places)=>{
      return this.places = [];
    }).catch((err)=>{
      console.log("Native indexDB error");
    });
  }

  getPlaces(){
    //using native API to store our data
    return this.storage.get('places').then((places)=> {
      this.places = places == null ? [] : places;
      return this.places.slice();
    }
  ); // async operation with a promise
  }

}

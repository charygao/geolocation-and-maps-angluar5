import {Component, ViewChild, OnInit, Injector , Input} from '@angular/core';

/**
 * Generated class for the ZipUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'zip-upload',
  templateUrl: 'zip-upload.html'
})
export class ZipUploadComponent {

  text: string;
  private zipFile: File;
  private zipFileName:string;

  constructor() {
    
  }
  public uploadChange =(event):void=>{
    this.zipFile =  event.target.files[0];
    console.log(this.zipFile);
  }
}

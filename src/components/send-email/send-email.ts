import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileUtils } from '../../app/util/utilities';
import { FileChooser } from '@ionic-native/file-chooser';
import {FilePath} from '@ionic-native/file-path';
/**
 * Generated class for the SendEmailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'send-email',
  templateUrl: 'send-email.html'
})
export class SendEmailComponent {

  text: string;
  attachments:Array<any> = new Array<any>();
  constructor(private emailComposer: EmailComposer , public fileTransfer: FileTransfer , private filePath:FilePath) {
  }
  public sendEmail():void{
    this.emailComposer.isAvailable().then((available:boolean)=>{
      if(available){
        console.log(this.emailComposer);
      }
    }).catch(e=>console.log(e));

    let email = {
      to: 'saimon@devdactic.com',
      cc: 'max@mustermann.de',
      attachments: this.attachments,
      subject: 'My Cool Image',
      body: 'Hey Simon, what do you thing about this image?',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }

  /*public openAttachments():string {
    let ret:string = "";
    FileUtils.getFileUtilInstance() // this will be initialise once in the Class field section
    FileUtils.openFileChooser().then(uri=>{
     return this.filePath.resolveNativePath(uri).then(filePath=>{
        ret = filePath;
      }).catch(e=>console.log(e));
    }).catch(e=>console.log(e));
    return ret;  
  }*/
  public uploadFile = () => {
    FileUtils.getFileUtilInstance() // this will be initialise once in the Class field section
    FileUtils.openFileChooser().then(uri => {
      this.filePath.resolveNativePath(uri).then(filePath => {
        //the native does not allow you to choose multiple files at a time , soo push resolved file path into a array
        this.attachments.push(filePath);

      }).catch(e => console.log(e));
    }).catch(e => console.log(e));
    return this.attachments;
  }
}

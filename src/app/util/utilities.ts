import { FileChooser } from '@ionic-native/file-chooser';

export class Utils{
    //shoudl have all static members , OOP concepts

    //public static
}

export class FileUtils{
    private static fileChooserInstance: FileChooser;

   private constructor(){ // avoid the init 
        //FileUtils.fileChooserInstance = this.fileChooser;  
    }
    //returns a promise
    static getFileUtilInstance(){
       if(!FileUtils.fileChooserInstance){
           FileUtils.fileChooserInstance =  new FileChooser(); // sucksssssssssss , shd be FileUtils this is a hack with no consequences
       }
       return FileUtils.fileChooserInstance;
    }
    public static openFileChooser(): Promise<any> {
            return new Promise((resolve, reject) => {
                FileUtils.fileChooserInstance.open().then(uri=>{
                    resolve(uri);
                }).catch(e=>{
                    reject(e)
                })
            });
    }
}
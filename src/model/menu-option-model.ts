import {Observable} from "rxjs/Observable";

export interface MenuOptionModel{
  iconName?:string;
  displayName:string;
  badge?:Observable<any>;
  // Target component (or null if it's a "special option" like login/logout)
  component?:any;
  // Here you can pass whatever you need, and will be returned if this
  // option is selected. That way you can handle login/logout options,
  // changing the language, and son on...
  custom?:any;
  visible:boolean;
  selected?:boolean;

}

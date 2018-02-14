import { Component , ViewChild , TemplateRef } from '@angular/core';
import {MenuOptionModel} from '../../model/menu-option-model';
import {SideMenuSettings} from '../../model/side-menu-settings';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the MenuToggleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-menu-toggle',
  templateUrl: 'menu-toggle.html'
})
export class MenuToggleComponent {
  constructor(private platform:Platform) {
   
  }
}

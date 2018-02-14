import { Component } from '@angular/core';
import { NavController , ModalController , MenuController } from 'ionic-angular';
/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  text: string;
  constructor(public menu:MenuController) {
  }

}

import { Component } from '@angular/core';

/**
 * Generated class for the AppNavComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-nav',
  templateUrl: 'app-nav.html'
})
export class AppNavComponent {

  text: string;

  constructor() {
    console.log('Hello AppNavComponent Component');
    this.text = 'Hello World';
  }

}

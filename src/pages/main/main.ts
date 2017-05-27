import { Component } from '@angular/core'
import { IonicPage, NavController } from 'ionic-angular'

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor (
    public nav: NavController
  ) {}

  setExit () {
    this.nav.setRoot('WelcomePage')
  }

}

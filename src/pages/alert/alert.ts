import { Component } from '@angular/core'
import { AlertController, IonicPage } from 'ionic-angular'

/**
 * Generated class for the AlertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor (
    public alert: AlertController
  ) {}

  setBasic () {
    this.alert.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      message: 'what the',
      buttons: ['Dismiss']
    })
    .present()
  }

}

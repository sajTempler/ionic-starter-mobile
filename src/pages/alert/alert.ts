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
      title: '标题',
      message: '告知当前状态，信息和解决方法',
      buttons: ['确定']
    })
    .present()
  }

}

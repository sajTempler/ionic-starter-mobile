import { Component } from '@angular/core'
import { AlertController, ModalController } from 'ionic-angular'
import { UserLoginPage } from '../../pages/user-login/user-login'
import { Common } from '../../providers/common'
import { User } from '../../providers/user'

@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {

  constructor (
    public alert: AlertController,
    public common: Common,
    public modal: ModalController,
    public user: User
  ) { }

  get menu () {
    return this.common.menu
  }

  get username () {
    return this.user.username
  }

  setPage (page) {
    location.hash = page.url
  }

  setLogout () {
    this.alert.create({
      message: '登出账号？',
      buttons: [
        { text: '取消', role: 'cancel' },
        { text: '确认', handler: this.setUser.bind(this) }
      ]
    }).present()
  }

  setUser () {
    this.user
      .doLogout()
      .then(() => this.modal.create(UserLoginPage).present())
  }

}

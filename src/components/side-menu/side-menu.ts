import { Component } from '@angular/core'
import { AlertController, ModalController } from 'ionic-angular'
import { UserLoginPage } from '../../pages/user-login/user-login'
import { Main } from '../../providers/main'
import { User } from '../../providers/user'

@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {

  constructor (
    public alert: AlertController,
    public main: Main,
    public modal: ModalController,
    public user: User
  ) { }

  get menu () {
    return this.main.menu
  }

  get username () {
    return this.user.username
  }

  setPage (page) {
    location.hash = page.url
  }

  setLogout () {
    this.alert.create({
      message: '确定退出？',
      buttons: [
        { text: '否', role: 'cancel' },
        { text: '是', handler: this.setUser.bind(this) }
      ]
    }).present()
  }

  setUser () {
    this.user
      .doLogout()
      .then(() => this.modal.create(UserLoginPage).present())
  }

}

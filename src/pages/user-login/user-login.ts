import { Component } from '@angular/core'
import { AlertController, ViewController } from 'ionic-angular'
import { User } from '../../providers/user'

@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html'
})
export class UserLoginPage {

  username: string
  password: string

  constructor (
    public alert: AlertController,
    public user: User,
    public view: ViewController
  ) {}

  setUser () {
    return this.user
      .doLogin(this.username, this.password)
      .then(() => this.view.dismiss())
      .catch(() => this.alert.create({
        message: '用户名或密码错误！'
      }).present())
  }

}

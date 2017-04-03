import { Component } from '@angular/core'
import { IonicPage } from 'ionic-angular'
import { User } from '../../providers'

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor (
    public user: User
  ) {}

  setUser () {
    this.user.onAir = true
  }

}

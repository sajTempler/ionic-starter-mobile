import { Component } from '@angular/core'
import { User } from '../../imports/provider'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor (
    public user: User
  ) {}

  setLogin () {
    this.user.onAir = true
  }

}

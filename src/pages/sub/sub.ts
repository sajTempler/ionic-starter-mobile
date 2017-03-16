import { Component } from '@angular/core'
import { User } from '../../imports/provider'

@Component({
  selector: 'page-sub',
  templateUrl: 'sub.html'
})
export class SubPage {

  constructor (
    public user: User
  ) {}

  setLogout () {
    this.user.onAir = false
  }

}

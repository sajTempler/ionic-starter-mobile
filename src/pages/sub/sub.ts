import { Component } from '@angular/core'
import { IonicPage } from 'ionic-angular'
import { User } from '../../providers'

@IonicPage({
  name: 'sub'
})
@Component({
  selector: 'page-sub',
  templateUrl: 'sub.html'
})
export class SubPage {

  constructor (
    public user: User
  ) {}

  setUser () {
    this.user.onAir = false
  }

}

import { Component } from '@angular/core'
import { IonicPage } from 'ionic-angular'
import { User } from '../../providers'

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  template: `
    <ion-header>

      <ion-navbar>
        <ion-title>login</ion-title>
      </ion-navbar>

    </ion-header>


    <ion-content padding>
      <button ion-button (click)="setUser()">login</button>
    </ion-content>
  `
})
export class LoginPage {

  constructor (
    public user: User
  ) {}

  setUser () {
    this.user.onAir = true
  }

}

import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { Splashscreen } from 'ionic-native'
import { LoginPage, MainPage } from '../imports/page'
import { Setting, User } from '../imports/provider'

@Component({
  template: `
    <ion-menu [content]="content" swipeEnabled="false">
      <app-nav></app-nav>
    </ion-menu>
    <ion-nav #content [root]="root"></ion-nav>
  `
})
export class AppComponent {

  constructor (
    public platform: Platform,
    public setting: Setting,
    public user: User
  ) {}

  ngOnInit () {
    Promise.all([
      this.setApp(),
      this.setPlugin(),
      this.setUser()
    ])
    .then(() => Splashscreen.hide())
  }

  get root () {
    return this.user.onAir ? MainPage : LoginPage
  }

  setApp () {
    return this.setting.doInitApp()
  }

  setPlugin () {
    return this.platform.ready()
  }

  setUser () {
    return this.user.doSyncCurrent()
  }

}

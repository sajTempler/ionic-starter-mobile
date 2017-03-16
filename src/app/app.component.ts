import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { Splashscreen } from 'ionic-native'
import { Setting, User } from '../imports/provider'

@Component({
  template: `
    <ion-menu [content]="content" swipeEnabled="false">
      <app-nav></app-nav>
    </ion-menu>
    <ion-nav #content></ion-nav>
  `
})
export class AppComponent {

  constructor (
    public platform: Platform,
    public setting: Setting,
    public user: User
  ) {}

  ngOnInit () {
    this.setApp()
    this.setPlugin()
    this.setUser()
  }

  setApp () {
    this.setting.doInitApp()
  }

  setPlugin () {
    this.platform.ready().then(() => {
      Splashscreen.hide()
    })
  }

  setUser () {
    this.user.doSyncCurrent()
  }

}

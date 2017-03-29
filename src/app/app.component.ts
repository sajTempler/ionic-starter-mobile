import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { SplashScreen } from '../natives'
import { Setting, User } from '../providers'

import { PageOne } from '../pages/page-one/page-one'

@Component({
  template: `
    <ion-split-pane>
      <ion-menu [content]="content" swipeEnabled="false">
        <app-nav></app-nav>
      </ion-menu>
      <ion-nav #content main [root]="root"></ion-nav>
    </ion-split-pane>
  `
})
export class AppComponent {

  constructor (
    public platform: Platform,
    public setting: Setting,
    public splash: SplashScreen,
    public user: User
  ) {}

  ngOnInit () {
    Promise.all([
      this.setApp(),
      this.setNative(),
      this.setUser()
    ])
    .then(() => this.splash.hide())
  }

  get root () {
    return PageOne
  }

  setApp () {
    return this.setting.doInitApp()
  }

  setNative () {
    return this.platform.ready()
  }

  setUser () {
    return this.user.doSyncCurrent()
  }

}

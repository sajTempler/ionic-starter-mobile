import { Component } from '@angular/core'
import { Storage } from '@ionic/storage'
import { Platform } from 'ionic-angular'
import * as Native from '../natives'

@Component({
  template: `
    <ion-split-pane>
      <ion-menu [content]="content" swipeEnabled="false">
        <app-nav></app-nav>
      </ion-menu>
      <ion-nav #content main root="WelcomePage"></ion-nav>
    </ion-split-pane>
  `
})
export class AppComponent {

  constructor (
    public platform: Platform,
    public splash: Native.SplashScreen,
    public storage: Storage
  ) {}

  ngOnInit () {
    this.platform.ready()
    .then(res => this[res]())
    .then(() => this.splash.hide())
  }

  cordova () {
    return Promise.all([
      this.storage.ready()
    ])
  }

  dom () {
    console.log('https://github.com/fundo90/ionic-starter-mobile')
  }

}

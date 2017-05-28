import { Component } from '@angular/core'
import { Storage } from '@ionic/storage'
import { App, Platform } from 'ionic-angular'
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
    public app: App,
    public platform: Platform,
    public splash: Native.SplashScreen,
    public storage: Storage
  ) {}

  ngOnInit () {
    this.platform.ready()
    .then(res => this[res]())
  }

  cordova () {
    return Promise.all([
      this.storage.ready()
    ])
    .then(() => this.splash.hide())
  }

  dom () {
    console.log('https://github.com/fundo90/ionic-starter-mobile')

    const events = [
      'viewDidEnter',
      'viewDidLeave',
      'viewDidLoad',
      'viewWillEnter',
      'viewWillLeave',
      'viewWillUnload'
    ]

    events.forEach(
      event => this.app[event].subscribe(
        () => {}
        // res => console.log(event, new Date, res)
      )
    )
  }

}

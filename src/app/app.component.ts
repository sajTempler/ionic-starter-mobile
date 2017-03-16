import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { Splashscreen } from 'ionic-native'

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
    public platform: Platform
  ) {}

  ngOnInit () {
    this.setApp()
    this.setPlugin()
    this.setUser()
  }

  setApp () {
  }

  setPlugin () {
    this.platform.ready().then(() => {
      Splashscreen.hide()
    })
  }

  setUser () {
  }

}

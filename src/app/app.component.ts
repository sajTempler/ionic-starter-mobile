import { Component, HostListener, NgZone } from '@angular/core'
import { AlertController, ModalController, Platform } from 'ionic-angular'
import { Splashscreen } from 'ionic-native'
import { UserLoginPage } from '../pages/user-login/user-login'
import { Main } from '../providers/main'
import { User } from '../providers/user'

@Component({
  template: `
    <ion-menu [content]="content" [swipeEnabled]="swipeEnabled">
      <side-menu></side-menu>
    </ion-menu>
    <ion-nav #content></ion-nav>
  `
})
export class AppComponent {

  constructor (
    public alert: AlertController,
    public main: Main,
    public modal: ModalController,
    public platform: Platform,
    public user: User,
    public zone: NgZone
  ) {}

  ngOnInit () {
    this.platform.ready()
      .then(() => Promise.all([
        this.setApp(),
        this.setEvent(),
        this.setUser()
      ]))
      .then(() => location.hash = '/main')
      .then(() => setTimeout(() => Splashscreen.hide(), 666))
  }

  get swipeEnabled () {
    return this.main.activeMenu
  }

  setApp () {
    return this.main.doAppInit()
  }

  setEvent () {
    return Promise.resolve(
      // 应用激活事件
      this.platform.resume.subscribe(() => {
        this.alert.create({
          message: '欢迎回来'
        }).present()
      })
    )
  }

  setUser () {
    return this.user
      .doSyncCurrent()
      .catch(() => {
        this.modal.create(UserLoginPage).present()
      })
  }

  @HostListener('window:resize')
  onResize () {
    // 强制更新页面状态
    this.zone.run(() => {
      console.log('窗口大小变了')
    })
  }

}

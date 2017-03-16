import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { Animation, Menu, MenuController, MenuType, Platform } from 'ionic-angular'
import { AppModule } from './app.module'

class MenuPushType extends MenuType {

  constructor (
    menu: Menu,
    plt: Platform
  ) {
    super(plt)

    const menuWidth = menu.width()
    const transition = [
      { name: 'Menu', from: -menuWidth / 4 + 'px', to: '0px' },
      { name: 'Content', from: '0px', to: menuWidth + 'px' }
    ]

    transition.forEach((ele) => {
      const animation = new Animation(plt, menu[`get${ele.name}Element`]())
      animation.fromTo('translateX', ele.from, ele.to)
      this.ani.add(animation)
    })
  }

}

MenuController.registerType('push', MenuPushType)
platformBrowserDynamic().bootstrapModule(AppModule)

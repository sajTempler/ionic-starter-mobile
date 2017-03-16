import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { Animation, Menu, MenuController, MenuType, Platform } from 'ionic-angular'
import { AppModule } from './app.module'

class AppMenu extends MenuType {

  constructor (
    menu: Menu,
    plt: Platform
  ) {
    super(plt)

    const menuWidth = menu.width()

    const appMenu = new Animation(plt, menu.getMenuElement())
    appMenu.fromTo('translateX', -menuWidth / 4 + 'px', '0px')
    this.ani.add(appMenu)

    const appContent = new Animation(plt, menu.getContentElement())
    appContent.fromTo('translateX', '0px', menuWidth + 'px').fromTo('scale', '1', '.8');
    this.ani.add(appContent)
  }

}

MenuController.registerType('menu', AppMenu)
platformBrowserDynamic().bootstrapModule(AppModule)

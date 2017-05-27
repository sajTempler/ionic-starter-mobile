import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { Animation, Menu, MenuController, MenuType, Platform } from 'ionic-angular'
import { AppModule } from './app.module'
import 'intl'
import 'intl/locale-data/jsonp/en'

class AppMenu extends MenuType {

  constructor (
    menu: Menu,
    plt: Platform
  ) {
    super(plt)

    const content = new Animation(plt, menu.getContentElement())
    const drawer = new Animation(plt, menu.getMenuElement())
    const animation = [content, drawer]
    const width = menu.width()

    content
      .fromTo('translateX', '0px', width + 'px')
      .fromTo('scale', 1, .8)

    drawer
      .fromTo('translateX', -width / 3 + 'px', '0px')

    animation.forEach(animation => this.ani.add(animation))
  }

}

MenuController.registerType('menu', AppMenu)
platformBrowserDynamic().bootstrapModule(AppModule)

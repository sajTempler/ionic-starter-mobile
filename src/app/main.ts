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

    const backdrop = new Animation(plt, menu.getBackdropElement())
    const content = new Animation(plt, menu.getContentElement())
    const drawer = new Animation(plt, menu.getMenuElement())
    const animation = [backdrop, content, drawer]
    const width = menu.width()

    backdrop
      .fromTo('opacity', 0.01, 0.35)

    content
      .fromTo('translateX', '0px', width + 'px')

    drawer
      .fromTo('translateX', -width / 3 + 'px', '0px')

    animation.forEach(animation => this.ani.add(animation))
  }

}

MenuController.registerType('menu', AppMenu)
platformBrowserDynamic().bootstrapModule(AppModule)

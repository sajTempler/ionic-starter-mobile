import { ErrorHandler, NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { IonicStorageModule } from '@ionic/storage'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { AppComponent } from './app.component'
import { ComponentModule } from '../components/component.module'
import * as Native from '../natives'
import * as Provider from '../providers'

@NgModule({
  bootstrap: [
    IonicApp
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    HttpModule,
    IonicModule.forRoot(AppComponent, {
      activator: 'ripple',
      api: window['debug'] ? '/api' : 'http://production',
      backButtonIcon: 'ios-arrow-round-back',
      backButtonText: '',
      debug: window['debug'],
      hoverCSS: false,
      iconMode: 'ios',
      menuType: 'menu',
      mode: 'fd',
      pageTransition: 'ios',
      preloadModules: !!window['cordova'],
      swipeBackEnabled: false,
      tabsHideOnSubPages: true,
      tabsHighlight: true
    }),
    IonicStorageModule.forRoot({
      name: 'ionic2mobile',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  providers: [
    // 服务
    Provider.Api,
    // 插件
    Native.SplashScreen,
    Native.StatusBar,
    // 异常
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

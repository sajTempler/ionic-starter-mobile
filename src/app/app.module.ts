import { ErrorHandler, isDevMode, NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { IonicStorageModule } from '@ionic/storage'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { AppComponent } from './app.component'
import * as Native from '../natives'
import * as Provider from '../providers'
import { AppNavComponent } from '../components/app-nav/app-nav';

@NgModule({
  bootstrap: [
    IonicApp
  ],
  declarations: [
    AppComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(AppComponent, {
      activator: 'ripple',
      api: isDevMode() ? '/api' : 'http://production',
      backButtonText: '',
      debug: true || !window['cordova'],
      hoverCSS: false,
      iconMode: 'ios',
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

import { NgModule, ErrorHandler } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { IonicStorageModule } from '@ionic/storage'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { AppComponent, AppNavComponent } from '../components'
import { HTTP, SplashScreen } from '../natives'
import { Link, Timestamp } from '../pipes'
import { Api, Setting, User } from '../providers'
import { Config } from '../utils'

import { TabsPageModule } from './tabs/tabs.module'

@NgModule({
  bootstrap: [ IonicApp ],
  declarations: [
    AppComponent,
    // 组件
    AppNavComponent,
    // 管道
    Link, Timestamp
  ],
  imports: [
    TabsPageModule,

    BrowserModule,
    HttpModule,
    IonicModule.forRoot(AppComponent, Config),
    IonicStorageModule.forRoot()
  ],
  providers: [
    // 服务
    Api, Setting, User,
    // 插件
    HTTP, SplashScreen,
    // 异常
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

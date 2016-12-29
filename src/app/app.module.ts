import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { App } from './app'
import { Api } from '../providers/api'
import { Notice } from '../providers/notice'
import { Main } from '../providers/main'
import { User } from '../providers/user'

@NgModule({
  bootstrap: [ IonicApp ],
  declarations: App.declare,
  entryComponents: App.entry,
  imports: [
    IonicModule.forRoot(
      App.component,
      { mode: 'md', pageTransition: 'ios', swipeBackEnabled: false },
      { links: App.routes }
    )
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Api, Notice, Main, User
  ]
})
export class AppModule { }

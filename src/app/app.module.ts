import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { App } from './app'
import { Api } from '../providers/api'
import { Common } from '../providers/common'
import { Notice } from '../providers/notice'
import { User } from '../providers/user'

@NgModule({
  bootstrap: [ IonicApp ],
  declarations: App.declare,
  entryComponents: App.entry,
  imports: [
    IonicModule.forRoot(
      App.component,
      App.config,
      { links: App.routes }
    )
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Api, Common, Notice, User
  ]
})
export class AppModule { }

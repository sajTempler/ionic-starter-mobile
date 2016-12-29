import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import { AppModule } from './app.module'

(<any>window).cordova && enableProdMode()
platformBrowserDynamic().bootstrapModule(AppModule)

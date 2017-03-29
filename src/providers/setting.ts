import { Injectable } from '@angular/core'
import { Api } from './api'

@Injectable()
export class Setting {

  constructor (
    public api: Api
  ) {
    window['cordova'] || this.ngOnInit()
  }

  ngOnInit () {}

  doInitApp () {}

}

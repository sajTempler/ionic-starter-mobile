import { Injectable } from '@angular/core'
import { Api } from '../imports/provider'

@Injectable()
export class Setting {

  constructor (
    public api: Api
  ) {
    window['cordova'] || this.ngOnInit()
  }

  ngOnInit () {}

}

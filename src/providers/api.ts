import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import { Config } from 'ionic-angular'
import * as Util from '../utils'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class Api {

  constructor (
    public config: Config,
    public http: Http
  ) {
    config.get('debug') && this.ngOnInit()
  }

  ngOnInit () {}

  get (url, data?) {
    url = this.config.get('api') + url
    data && (url = url + '?' + Util.json2url(data))
    return this.http.get(url)
      .map(res => res.json())
      .toPromise()
  }

  post (url, data?) {
    url = this.config.get('api') + url
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
    return this.http.post(url, Util.json2url(data), { headers })
      .map(res => res.json())
      .toPromise()
  }

}

import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptionsArgs } from '@angular/http'
import { HTTP } from '../natives'
import { json2url } from '../utils'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class Api {

  postOptions: RequestOptionsArgs
  type: string
  url: string

  constructor (
    public native: HTTP,
    public web: Http
  ) {
    this.postOptions = {
      headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    this.type = 'native'
    this.url = 'http://production'
    window['cordova'] || this.ngOnInit()
  }

  ngOnInit () {
    this.type = 'web'
    this.url = 'http://develop'
  }

  get (url, data?) {
    url = this.url + url
    return this[`${this.type}Get`](url, data)
  }

  nativeGet (url, data) {
    return this.native.get(url, data || {}, {})
      .then(res => JSON.parse(res.data))
  }

  webGet (url, data) {
    data && (url = url + '?' + json2url(data))
    return this.web.get(url)
      .map(res => res.json())
      .toPromise()
  }

  post (url, data) {
    url = this.url + url
    return this[`${this.type}Post`](url, data)
  }

  nativePost (url, data) {
    return this.native.post(url, data || {}, {})
      .then(res => JSON.parse(res.data))
  }

  webPost (url, data) {
    return this.web.post(url, json2url(data), this.postOptions)
      .map(res => res.json())
      .toPromise()
  }

}

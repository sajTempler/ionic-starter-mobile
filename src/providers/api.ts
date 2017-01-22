import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptionsArgs } from '@angular/http'
import { HTTP } from 'ionic-native'
import { App, json2url } from '../app/app'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class Api {

  url: string
  postOptions: RequestOptionsArgs

  constructor (
    public http: Http
  ) {
    this.url = 'http://production'
    this.postOptions = {
      headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    window['cordova'] || this.ngOnInit()
  }

  ngOnInit () {
    this.url = 'http://develop'
  }

  get (url, data?) {
    url = this.url + url
    let http = this.webGet(url, data)
    // http = window['cordova'] ? this.nativeGet(url, data) : this.webGet(url, data)
    App.debug && (http = http.catch(() => {}))
    return http
  }

  nativeGet (url, data) {
    return HTTP.get(url, data || {}, {})
      .then(res => JSON.parse(res.data))
  }

  webGet (url, data) {
    data && (url = url + '?' + json2url(data))
    return this.http.get(url)
      .map(res => res.json())
      .toPromise()
  }

  post (url, data) {
    url = this.url + url
    let http = this.webPost(url, data)
    // http = window['cordova'] ? this.nativePost(url, data) : this.webPost(url, data)
    App.debug && (http = http.catch(() => {}))
    return http
  }

  nativePost (url, data) {
    return HTTP.post(url, data || {}, {})
      .then(res => JSON.parse(res.data))
  }

  webPost (url, data) {
    return this.http.post(url, json2url(data), this.postOptions)
      .map(res => res.json())
      .toPromise()
  }

}

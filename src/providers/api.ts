import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptionsArgs } from '@angular/http'
import { HTTP } from 'ionic-native'
import { json2url } from '../imports'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class Api {

  postOptions: RequestOptionsArgs
  type: string
  url: string

  constructor (
    public http: Http
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
    return this[`${this.type}Post`](url, data)
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

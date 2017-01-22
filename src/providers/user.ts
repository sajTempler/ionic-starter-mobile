import { Injectable } from '@angular/core'
import { Api } from './api'
import { syncData } from '../app/app'

@Injectable()
export class User {

  username: string                    // 用户名

  constructor (
    public api: Api
  ) {
    this.username = ''
    window['cordova'] || this.ngOnInit()
  }

  // 测试数据
  ngOnInit () { }

  makeUser (data) {
    return {
      // username: data.username
    }
  }

  doLogout () {
    return this.api
      .get('/user/logout')
      .then(res => this.makeUser(res))
      .then(syncData.bind(this))
  }

  doLogin (username, password) {
    return this.api
      .post('/user/login', {
        username: username,
        password: password
      })
      .then(res => this.makeUser(res))
      .then(syncData.bind(this))
  }

  doSyncCurrent () {
    return this.api
      .get('/user')
      .then(res => this.makeUser(res))
      .then(syncData.bind(this))
  }

}

import { AppComponent } from '../app/app.component'
import { AppNavComponent } from './component'
import { MainPage, SubPage } from './page'
import { Link, Timestamp } from './pipe'
import { Api, User } from './provider'

export const App = {
  component: AppComponent,
  config: {
    backButtonIcon: 'ios-arrow-back',
    hoverCSS: false,
    iconMode: 'ios',
    // locationStrategy: 'path',
    menuType: 'menu',
    // mode: 'fd',
    pageTransition: 'ios',
    swipeBackEnabled: false
  },
  entry: [
    // 页面
    MainPage, SubPage,
    // 应用
    AppComponent
  ],
  extra: [
    // 组件
    AppNavComponent,
    // 管道
    Link, Timestamp
  ],
  routes: [
    { segment: 'main', component: MainPage },
    { segment: 'sub', component: SubPage }
  ],
  store: [
    // 服务
    Api, User
  ]
}

export function refreshing (refresher) {
  refresher && refresher.complete()
  let loading = this.create({ dismissOnPageChange: true })
  loading.present()
  return loading
}

export function json2url (data) {
  let arr = []
  for (let i in data) {
    arr.push(i + '=' + data[i])
  }
  return arr.join('&')
}

export function syncData (data) {
  for (let i in data) {
    this[i] = data[i]
  }
}

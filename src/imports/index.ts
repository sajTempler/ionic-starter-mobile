import { AppComponent } from '../app/app.component'
// import { LayoutComponent, NavContentComponent, NavHeaderComponent } from './component'
import { MainPage, MenuPage, SubPage } from './page'
import { Link, Timestamp } from './pipe'
import { Api, User } from './provider'

export const App = {
  component: AppComponent,
  config: {
    backButtonIcon: 'ios-arrow-back',
    iconMode: 'ios',
    // locationStrategy: 'path',
    menuType: 'push',
    // mode: 'fd',
    pageTransition: 'ios',
    swipeBackEnabled: false
  },
  entry: [
    // 页面
    MainPage, MenuPage, SubPage,
    // 应用
    AppComponent
  ],
  extra: [
    // 组件
    // LayoutComponent, NavContentComponent, NavHeaderComponent,
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

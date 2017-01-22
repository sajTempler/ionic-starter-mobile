import { DetailPage } from '../pages/detail/detail'
import { ListPage } from '../pages/list/list'
import { MainPage } from '../pages/main/main'
import { UserLoginPage } from '../pages/user-login/user-login'
import { AppComponent } from './app.component'
import { MainTabPrimaryComponent } from '../components/main-tab-primary/main-tab-primary'
import { MainTabSecondaryComponent } from '../components/main-tab-secondary/main-tab-secondary'
import { SideMenuComponent } from '../components/side-menu/side-menu'
import { Link } from '../pipes/link'
import { Timestamp } from '../pipes/timestamp'

export const App = {
  component: AppComponent,
  config: {
    backButtonIcon: 'ios-arrow-back',
    ionPullIcon: 'refresh-circle',
    menuType: 'push',
    mode: 'md',
    pageTransition: 'ios'
  },
  debug: true,
  declare: [
    // 页面
    DetailPage, ListPage, MainPage, UserLoginPage,
    // 应用
    AppComponent,
    // 组件
    MainTabPrimaryComponent, MainTabSecondaryComponent, SideMenuComponent,
    // 管道
    Link, Timestamp
  ],
  entry: [
    // 页面
    DetailPage, ListPage, MainPage, UserLoginPage,
    // 应用
    AppComponent
  ],
  routes: [
    { segment: 'main', component: MainPage },
    { segment: 'list', component: ListPage },
    { segment: 'detail', component: DetailPage }
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

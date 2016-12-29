import { Component } from '@angular/core'
import { LoadingController } from 'ionic-angular'
import { Main } from '../../providers/main'
import { refreshing } from '../../app/app'

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor (
    public loading: LoadingController,
    public main: Main
  ) { }

  ionViewDidEnter() {
    this.main.activeMenu = true
  }

  ionViewWillLeave () {
    this.main.activeMenu = false
  }

  get tab () {
    return this.main.mainTab
  }

  setList (refresher) {
    let loading = refreshing.call(this.loading, refresher)
    Promise.all([
      // 执行数据获取
    ])
    .then(() => loading.dismiss())
  }

  setTab (tab) {
    this.main.mainTab = tab
  }

}

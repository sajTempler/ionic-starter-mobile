import { Component } from '@angular/core'
import { LoadingController } from 'ionic-angular'
import { Common } from '../../providers/common'
import { refreshing } from '../../app/app'

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor (
    public common: Common,
    public loading: LoadingController
  ) { }

  ionViewDidEnter() {
    this.common.activeMenu = true
  }

  ionViewWillLeave () {
    this.common.activeMenu = false
  }

  get tab () {
    return this.common.mainTab
  }

  setList (refresher) {
    let loading = refreshing.call(this.loading, refresher)
    Promise.all([
      // 执行数据获取
    ])
    .then(() => loading.dismiss())
  }

  setTab (tab) {
    this.common.mainTab = tab
  }

}

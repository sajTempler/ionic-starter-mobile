import { Component } from '@angular/core'
import { LoadingController } from 'ionic-angular'
import { Notice } from '../../providers/notice'
import { refreshing } from '../../app/app'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor (
    public notice: Notice,
    public loading: LoadingController
  ) { }

  get list () {
    return this.notice.list
  }

  setList (refresher) {
    let loading = refreshing.call(this.loading, refresher)
    this.notice
      .doUpdateList()
      .then(() => loading.dismiss())
  }

  setSelected (notice) {
    this.notice.selected = notice
    location.hash = '/detail'
  }

}

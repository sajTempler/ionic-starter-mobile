import { Component } from '@angular/core'
import { Notice } from '../../providers/notice'

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor (
    public notice: Notice
  ) { }

  get content () {
    return this.notice.selected.content
  }

  get id () {
    return this.notice.selected.id
  }

}

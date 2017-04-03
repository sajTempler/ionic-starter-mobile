import { Component, ViewChild } from '@angular/core'
import { Content, IonicPage } from 'ionic-angular'

@IonicPage({
  name: 'mart'
})
@Component({
  selector: 'page-mart',
  templateUrl: 'mart.html'
})
export class MartPage {

  @ViewChild(Content) content: Content

  setScroll () {
    this.content.scrollToTop()
  }

}

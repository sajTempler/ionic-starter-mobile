import { Component, ViewChild } from '@angular/core'
import { Content } from 'ionic-angular'

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

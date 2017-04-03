import { Component, ViewChild } from '@angular/core'
import { Content, IonicPage } from 'ionic-angular'

@IonicPage({
  name: 'discover'
})
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

  @ViewChild(Content) content: Content

  setScroll () {
    this.content.scrollToTop()
  }

}

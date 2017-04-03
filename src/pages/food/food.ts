import { Component, ViewChild } from '@angular/core'
import { Content, IonicPage } from 'ionic-angular'

@IonicPage({
  name: 'food'
})
@Component({
  selector: 'page-food',
  templateUrl: 'food.html'
})
export class FoodPage {

  @ViewChild(Content) content: Content

  setScroll () {
    this.content.scrollToTop()
  }

}

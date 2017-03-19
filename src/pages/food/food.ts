import { Component, ViewChild } from '@angular/core'
import { Content } from 'ionic-angular'

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

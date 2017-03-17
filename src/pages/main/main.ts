import { Component } from '@angular/core'
import { DiscoverPage, ErrandPage, FoodPage, MartPage, TicketPage } from '../../imports/page'

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  get discover () {
    return DiscoverPage
  }

  get errand () {
    return ErrandPage
  }

  get food () {
    return FoodPage
  }

  get mart () {
    return MartPage
  }

  get ticket () {
    return TicketPage
  }

}

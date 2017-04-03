import { Component } from '@angular/core'
import { IonicPage, reorderArray } from 'ionic-angular'

@IonicPage({
  name: 'errand'
})
@Component({
  selector: 'page-errand',
  templateUrl: 'errand.html'
})
export class ErrandPage {

  items: any

  ngOnInit () {
    this.items = [ 1, 2, 3, 4, 5 ]
  }

  setItems ($event) {
    this.items = reorderArray(this.items, $event)
  }

}

import { Component } from '@angular/core'
import { App } from 'ionic-angular'

/**
 * Generated class for the AppNavComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-nav',
  templateUrl: 'app-nav.html'
})
export class AppNavComponent {

  constructor (
    public app: App
  ) {}

  setPage (page) {
    this.app.getRootNav().push(page)
  }

}

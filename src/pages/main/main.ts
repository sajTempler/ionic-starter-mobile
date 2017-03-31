import { Component } from '@angular/core'
import { IonicPage } from 'ionic-angular'

@IonicPage({
  name: 'main'
})
@Component({
  selector: 'page-main',
  template: `
    <ion-header>

      <ion-navbar>
        <ion-title>main</ion-title>
      </ion-navbar>

    </ion-header>


    <ion-content padding>
      <ion-icon name="ionic"></ion-icon>
    </ion-content>
  `
})
export class Main {}

import { Component } from '@angular/core'

@Component({
  selector: 'app-nav',
  template: `
    <ion-content padding>

      <a [href]="'sub'|link" ion-button menuClose>go to sub</a>

    </ion-content>
  `
})
export class AppNavComponent {}

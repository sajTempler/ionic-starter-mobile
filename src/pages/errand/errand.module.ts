import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { ErrandPage } from './errand'

@NgModule({
  declarations: [
    ErrandPage
  ],
  imports: [
    IonicPageModule.forChild(ErrandPage)
  ]
})
export class ErrandModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MajorPage } from './major';

@NgModule({
  declarations: [
    MajorPage,
  ],
  imports: [
    IonicPageModule.forChild(MajorPage),
  ],
  exports: [
    MajorPage
  ]
})
export class MajorPageModule {}

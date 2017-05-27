import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonPage } from './button';

@NgModule({
  declarations: [
    ButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonPage),
  ],
  exports: [
    ButtonPage
  ]
})
export class ButtonPageModule {}

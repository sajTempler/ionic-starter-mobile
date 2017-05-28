import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppNavComponent } from '../app-nav/app-nav';

@NgModule({
  declarations: [
    AppNavComponent,
  ],
  imports: [
    IonicPageModule.forChild(AppNavComponent),
  ],
  exports: [
    AppNavComponent
  ]
})
export class ComponentModule {}

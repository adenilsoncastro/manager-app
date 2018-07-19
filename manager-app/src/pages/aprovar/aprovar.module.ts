import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AprovarPage } from './aprovar';

@NgModule({
  declarations: [
    AprovarPage,
  ],
  imports: [
    IonicPageModule.forChild(AprovarPage),
  ],
  exports: [
    AprovarPage
  ]
})
export class AprovarPageModule {}

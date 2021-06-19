import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alarm, App, Bookmark,PersonCircle,FileEarmarkLock2,PenFill } from 'ng-bootstrap-icons/icons';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';

const icons = {
  Alarm,
  App,
  Bookmark,
  PersonCircle,
  FileEarmarkLock2,
  PenFill
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BootstrapIconsModule.pick(icons)
  ],exports:[
    BootstrapIconsModule
  ]
})
export class IconsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from "./data/data.module";
import { LoginComponent } from './login/login.component';
import { FaInputComponent } from './fa-input/fa-input.component';
import { InputRefDirective } from './directives/input-ref.directive';
import { SvgRefDirective } from './directives/svg-ref.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FaInputComponent,
    InputRefDirective,
    SvgRefDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from "./data/data.module";
import { LoginComponent } from './login/login.component';
import { FaInputComponent } from './fa-input/fa-input.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FaInputComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataModule } from "./data/data.module";
import { LoginComponent } from './login/login.component';
import { FaInputComponent } from './fa-input/fa-input.component';
import { InputRefDirective } from './directives/input-ref.directive';
import { SvgRefDirective } from './directives/svg-ref.directive';
import { IconsModule } from "./icons/icons.module";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { TokenInputComponent } from './token-input/token-input.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsCoincidencesComponent } from './products-coincidences/products-coincidences.component';
import { SoldPiecesComponent } from './sold-pieces/sold-pieces.component';
import { LogoutComponent } from './logout/logout.component';
import { AutoLogoutInterceptorService } from './data/auto-logout-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FaInputComponent,
    InputRefDirective,
    SvgRefDirective,
    MainComponent,
    TokenInputComponent,
    ProductDetailsComponent,
    ProductsCoincidencesComponent,
    SoldPiecesComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule,
    NgbModule,
    IconsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AutoLogoutInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

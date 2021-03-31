import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TokenInputComponent } from './token-input/token-input.component';

const childProductDetailsRoutes:Routes=[
  {path:':code', component: ProductDetailsComponent,canActivate:[LoggedInGuard]}
];

const childRoutes:Routes = [
  {path:'buscar/codigo', component: TokenInputComponent,canActivate:[LoggedInGuard],children:childProductDetailsRoutes},
  {path:'buscar/coincidencias', component: TokenInputComponent,canActivate:[LoggedInGuard]}
];

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'main', component: MainComponent,canActivate:[LoggedInGuard],children:childRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

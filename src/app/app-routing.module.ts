import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsCoincidencesComponent } from './products-coincidences/products-coincidences.component';
import { SoldPiecesComponent } from './sold-pieces/sold-pieces.component';
import { TokenInputComponent } from './token-input/token-input.component';

const childProductsCoincidencesRoutes:Routes=[
  {path:':coincidenceString', component: ProductsCoincidencesComponent,canActivate:[LoggedInGuard]}
];

const childProductDetailsRoutes:Routes=[
  {path:':code', component: ProductDetailsComponent,canActivate:[LoggedInGuard]}
];

const childRoutes:Routes = [
  {path:'buscar/codigo', component: TokenInputComponent,canActivate:[LoggedInGuard],children:childProductDetailsRoutes},
  {path:'buscar/coincidencias', component: TokenInputComponent,canActivate:[LoggedInGuard],children:childProductsCoincidencesRoutes},
  {path:'vendido', component: SoldPiecesComponent,canActivate:[LoggedInGuard]},
  {path:'logout', component: LogoutComponent,canActivate:[LoggedInGuard]}
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

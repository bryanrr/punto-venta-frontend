import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TokenInputComponent } from './token-input/token-input.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'main', component: MainComponent,canActivate:[LoggedInGuard]},
  {path:'buscar/:action', component: TokenInputComponent, canActivate:[LoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

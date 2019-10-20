import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {ResetComponent} from './auth/reset/reset.component';
import {StoreComponent} from './store/store.component';
import {CartComponent} from './cart/cart.component';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'reset-password', component: ResetComponent },
    { path: 'store', component: StoreComponent, canActivate: [AuthGuard] },
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard] }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ResetComponent} from './reset/reset.component';
import {AuthComponent} from './auth.component';
import {UsersService} from '../services/users.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';



@NgModule({
  declarations: [
    LoginComponent,
    ResetComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [UsersService, AuthService, AuthGuard]
})
export class AuthModule { }

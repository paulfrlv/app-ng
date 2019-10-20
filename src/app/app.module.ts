import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersService } from './services/users.service';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import {AuthModule} from './auth/auth.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    AuthModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

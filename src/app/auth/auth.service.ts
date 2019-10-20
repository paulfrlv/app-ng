import { Injectable } from '@angular/core';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  items;
  isLoggedIn = false;
  isAuth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      },200);
    });
  }
  constructor(private cartService: CartService) {}
  logIn() {
    this.isLoggedIn = true;
  }
  logOut() {
    this.isLoggedIn = false;
    this.items = this.cartService.clearCart();
  }
}


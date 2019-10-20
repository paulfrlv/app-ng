import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  items;
  value;
  sum;
  total = 0;
  clickMessage = '';
  span = document.querySelector('span');
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.value = this.items.length;
  }
  /*calcTotal() {
      this.total += +this.items.price;
      this.sum = this.total;
    }*/
  clearCart() {
    this.items = [];
    return this.items;
  }
  onClickMe() {
    this.clickMessage = 'Nothing here yet';
    this.value = 0;
  }
}


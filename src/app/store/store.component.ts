import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {CartService} from '../services/cart.service';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {

  products = [];
  constructor(private services: ProductsService,  private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.services.products;
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }
}

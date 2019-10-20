import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {
      name: 'iPhone XS max',
      price: 799
    },
    {
      name: 'iPhone XR',
      price: 699
    },
    {
      name: 'iPhone 8',
      price: 599
    },
    {
      name: 'iPhone 11 Pro',
      price: 899
    },
    {
      name: 'Huawei P smart+',
      price: 899
    },
    {
      name: 'Samsung S10',
      price: 399
    },
    {
      name: 'Honor 8',
      price: 499
    },
    {
      name: 'OnePlus 7',
      price: 1099
    },
  ];
  constructor() { }
}

import { Injectable } from '@angular/core';
import { category , categories } from './models/category';
import { product , products } from './models/product';

@Injectable()
export class ShoppingService {

  categoryList = categories;
  cartItems : product[] = [];
  productList = products; 

  getCategory() : category[] {
    return this.categoryList;
  }

  getProductsById(id : number) : product[] {
    return this.productList.filter(product =>product.CategoryId === id);
  }

  getAllProducts() : product[] {
    return this.productList;
  }


  addToCart(item : product) {
    this.cartItems.push(item);
  } 

  removeFromCart(item : product) {
    this.cartItems = this.cartItems.filter(product => product !== item);
  } 
}
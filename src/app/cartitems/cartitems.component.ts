import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { product } from '../models/product';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {

  constructor(public shoppingService : ShoppingService) { }

  ngOnInit() {
  }

  quantityArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedQuantity : number = 1;
  total : number = 0;

  removeItem(product : product) {
    product.AddedToCart = false;
    product.Quantity = 1;
    this.shoppingService.removeFromCart(product);
  }

  getTotal() : number {
      this.total = 0;
      
      this.shoppingService.cartItems.forEach(element => {
        this.total = this.total + (element.Price *  element.Quantity)
      });

      return this.total;
  }
}

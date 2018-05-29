import { Component, OnInit } from '@angular/core';
import { category , product } from '../shopping';
import { ShoppingService } from '../shopping.service';
import { FilterPipe }from '../filter-pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private shoppingService : ShoppingService) { }

  categoryList : category[];
  selectedCategoryId : number;
  productList : product[];
  searchText : string;

  ngOnInit() {
    this.getCategories(); 
    this.selectedCategoryId = this.categoryList[0].Id;
    this.getProducts(this.categoryList[0].Id);
  }

  getCategories() : void{
      this.categoryList = this.shoppingService.getCategory();
  }
  getProducts(id : number): void{
    this.productList = this.shoppingService.getProducts(id);
  }

  selectCategory (id : category['Id']) : void {
      this.selectedCategoryId = id;
      this.getProducts(id);
  }

  addToCart(product : product){
    product.AddedToCart = true;
    this.shoppingService.addToCart(product);
  }
}
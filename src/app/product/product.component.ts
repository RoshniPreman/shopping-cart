import { Component, OnInit } from '@angular/core';
import { category  } from '../models/category';
import {  product } from '../models/product';
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
  selectedCategoryName : string;
  productList : product[];
  searchText : string;
  isAllCategory : boolean;

  ngOnInit() {
    this.getCategories(); 
    this.selectedCategoryId = this.categoryList[0].Id;
    this.selectedCategoryName = this.categoryList[0].Name;
    this.getProducts(this.categoryList[0].Id);
  }

  getCategories() : void{
      this.categoryList = this.shoppingService.getCategory();
  }
  getProducts(id : number): void{
    this.productList = this.shoppingService.getProductsById(id);
  }

  selectCategory (category : category) : void {
      this.selectedCategoryId = category.Id;
      this.selectedCategoryName = category.Name;
      this.getProducts(this.selectedCategoryId);
  }

  addToCart(product : product){
    product.AddedToCart = true;
    this.shoppingService.addToCart(product);
  }

  checkboxChange(){

    if(this.isAllCategory){
      this.productList = this.shoppingService.getAllProducts();
    }
    else{
      this.getProducts(this.selectedCategoryId);
    }
   
  }
}
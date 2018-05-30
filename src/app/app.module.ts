import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShoppingService } from './shopping.service';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { AppRoutingModule } from './/app-routing.module';
import { FilterPipe }from './filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartitemsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [  ShoppingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

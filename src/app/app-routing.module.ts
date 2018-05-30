import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { ProductComponent } from './product/product.component';

const routes : Routes = [
  { path : 'index' , component : ProductComponent},
  { path : 'cartitems' , component : CartitemsComponent},
  { path : '' , redirectTo : '/index' , pathMatch : 'full'},
  { path : '**' , component :ProductComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

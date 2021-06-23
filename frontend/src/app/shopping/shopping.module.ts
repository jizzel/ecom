import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';




@NgModule({
  declarations: [
    CheckoutComponent,
    ShoppingListComponent

  ],
  imports: [
    CommonModule
  ],

  exports:[
    CheckoutComponent,
    ShoppingListComponent
  ]
})
export class ShoppingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSummaryComponent } from './shipping/order-summary/order-summary.component';
import {ShippingComponent} from "./shipping/shipping.component";
import { SharedModule } from '../shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CheckoutComponent,
    ShoppingCartComponent,
    OrderSummaryComponent,
    ShippingComponent,
  

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],

  exports:[
    CheckoutComponent,
    ShoppingCartComponent,
    OrderSummaryComponent,
    ShippingComponent
  ]
})
export class ShoppingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import {AdminComponent} from "./admin.component";


@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

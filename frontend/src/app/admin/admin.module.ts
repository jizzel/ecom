import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import {AdminComponent} from "./admin.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class AdminModule { }

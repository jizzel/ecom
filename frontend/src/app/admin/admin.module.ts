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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


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
        HttpClientModule,
        MatInputModule,
        FormsModule,
        MatSelectModule
    ]
})
export class AdminModule { }

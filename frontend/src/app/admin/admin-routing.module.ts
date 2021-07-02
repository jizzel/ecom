import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import {AdminComponent} from "./admin.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'orders', component: AdminOrdersComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:productId', component: ProductComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

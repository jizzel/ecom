import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import {AdminComponent} from "./admin.component";
import {ProductsComponent} from "./components/products/products.component";

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'orders', component: AdminOrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

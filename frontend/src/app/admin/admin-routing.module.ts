import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import {AdminComponent} from "./admin.component";

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'orders', component: AdminOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

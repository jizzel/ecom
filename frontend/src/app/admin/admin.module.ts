import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

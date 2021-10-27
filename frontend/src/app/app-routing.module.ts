import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import {ShippingComponent} from './shopping/shipping/shipping.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { ResetPasswordComponent } from './core/reset-password/reset-password.component';
import { MineOrdersComponent } from './core/mine-orders/mine-orders.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { Role } from './Models/role';
import { AuthGuard } from './helpers/auth.guard';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: 'manage-products', component: ProductsComponent , canLoad: [AuthGuard], canActivate: [AuthGuard],
      data: {roles: [Role.Admin,]}},
  {path: 'manage-orders', component:AdminOrdersComponent, canLoad: [AuthGuard], canActivate: [AuthGuard],
      data: {roles: [Role.Admin,]}},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path:'log-in', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'shipping', component:ShippingComponent},
  {path:'my-orders', component:MineOrdersComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

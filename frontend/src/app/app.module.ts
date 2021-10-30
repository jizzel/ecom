import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import {SharedModule} from "./shared/shared.module";
import {AdminModule} from "./admin/admin.module";
import {ShoppingModule} from "./shopping/shopping.module";
import { RegisterComponent } from './core/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './core/reset-password/reset-password.component';
import { MineOrdersComponent } from './core/mine-orders/mine-orders.component';
import { UserDirective } from './directives/user.directive';
import { UserRoleDirective } from './directives/user-role.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthenticationService } from './services/auth.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ResetPasswordComponent,
    MineOrdersComponent,
    UserDirective,
    UserRoleDirective
    
   
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
     // provider used to create fake backend
     fakeBackendProvider,
     AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

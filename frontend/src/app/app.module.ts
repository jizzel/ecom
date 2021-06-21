import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselComponent} from './shared/components/carousel/carousel.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CardComponent } from './shared/components/card/card.component';
import { FlatButtonComponent } from './shared/components/flat-button/flat-button.component';
import { RaisedButtonComponent } from './shared/components/raised-button/raised-button.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent,
    CardComponent,
    FlatButtonComponent,
    RaisedButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "./components/card/card.component";
import {CarouselComponent} from "./components/carousel/carousel.component";
import {FlatButtonComponent} from "./components/flat-button/flat-button.component";
import {RaisedButtonComponent} from "./components/raised-button/raised-button.component";
import {ProductQuantityComponent} from "./components/product-quantity/product-quantity.component";

@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent,
    FlatButtonComponent,
    RaisedButtonComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CarouselComponent,
    FlatButtonComponent,
    RaisedButtonComponent,
    ProductQuantityComponent
  ]
})
export class SharedModule { }

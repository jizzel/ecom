import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  //@Input('product') product: String;
  // @Input('shopping-cart') shoppingCart;

  // constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    // console.log(JSON.stringify(this.product));
    // console.log(this.shoppingCart.getQuantity(this.product));
  }

  addToCart() {
    // this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    // this.cartService.removeFromCart(this.product);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaisedButtonComponent  } from '../../shared/components/raised-button/raised-button.component';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  buttonName:string = "Checkout";
  numberOfItemsInCart:number=0;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onClickCheckOut(){
    this.route.navigate(['./shipping']);
  }
}

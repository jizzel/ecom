import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaisedButtonComponent  } from '../../shared/components/raised-button/raised-button.component';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  tableHeaderNames=['Item', 'Quantity', 'Price'];
  buttonName:string = "Checkout";
  numberOfItemsInCart:number=0;
  

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onClickCheckOut(){
    this.route.navigate(['./shipping']);
  }

  shoppingCartItems=[
    {
      prdtName:"Gold Earing",
      prdtImage:"../../assets/images/sample-1.jpeg",
      prtPrice:"30"
    },
    {
      prdtName:"Waist beads",
      prdtImage:"../../assets/images/sample-1.jpeg",
      prtPrice:"35"
    },
    {
      prdtName:"Pearl Earings",
      prdtImage:"../../assets/images/sample-1.jpeg",
      prtPrice:"120"
    },
  ]

  deleteShoppingCart(){
    this.shoppingCartItems=[];
  }
}



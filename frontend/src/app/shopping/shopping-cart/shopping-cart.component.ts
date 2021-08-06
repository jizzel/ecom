import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RaisedButtonComponent  } from '../../shared/components/raised-button/raised-button.component';
import * as M from 'materialize-css';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  //NOTE: Without uncommenting the strict:true in the tsconfig file the viewchild would throw an error
  @ViewChild('inputNumber', {static: false}) inputNumber: ElementRef;

  tableHeaderNames=['Item', 'Quantity', 'Price'];
  buttonName:string = "Checkout";
  numberOfItemsInCart:number= 0;
  currentItemNumber:number;

  constructor(private route:Router) {
   }

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

  reduceItemNumber(){
    this.currentItemNumber = parseInt(this.inputNumber.nativeElement.value);
     //if currentItemNumber is a valid number  and if currentItemNumber is greater than 0, subtract one to it otherwise make it 0
    if(!isNaN(this.currentItemNumber)  && this.currentItemNumber > 0){
      this.inputNumber.nativeElement.value= this.currentItemNumber - 1;
    }else{
      this.inputNumber.nativeElement.value = "0";
    }
  }

  increaseItemNumber(){
    this.currentItemNumber = parseInt(this.inputNumber.nativeElement.value);
    //if currentValue is a valid number add one to it otherwise make it 0
    if(!isNaN(this.currentItemNumber)){
      this.inputNumber.nativeElement.value= this.currentItemNumber + 1;
    }else{
      this.inputNumber.nativeElement.value = "0";
    }
  }
  
  deleteShoppingCart(){
    this.shoppingCartItems=[];
  } 
}





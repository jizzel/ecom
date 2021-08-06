import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {globals} from "../../../globals";


//declaring an interface for the product
export interface ProductType{
_id?: string;
name: string;
categoryId: string;
imageUrl: string;
price: string;
quantity:number;
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private http: HttpClient) { }
  addCartNotPressed=true;
  prdtElements:ProductType[]= [
    {_id:'', name:'', categoryId:'', imageUrl:'', price:'', quantity:0 }
  ];
  
  baseImageUrl = globals.baseUrl + '/static/'
  

  ngOnInit(): void {
    //request for the data in backend and populate 
    this.http.get( globals.baseUrl + '/products')
    .subscribe(data => {
      // @ts-ignore
      this.prdtElements= data;
    })
    console.log(this.prdtElements);
  }


onPressCartButton(){
  this.addCartNotPressed= false;
}
}




//Array of objects as dummy data for card.
  // prdtInfo=[
  //   // {prdtImage:"http://localhost:3000/static/1abec43db8c62be7aca90f5a8ab702e6canbebe-baby-diapers.jpg",
  //   //  prdtName:"Waist beads",
  //   //  prdtPrice:"30",
  //   //  prdtDescription:"I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively."  
  //   // },

  //   // {prdtImage:"../../assets/images/img1.jpg",
  //   //  prdtName:"Gold Earings",
  //   //  prdtDescription:"I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively."  
  //   // },

  //   // {prdtImage:"../../assets/images/img1.jpg",
  //   //  prdtName:"Pearl earings",
  //   //  prdtDescription:"I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively."  
  //   // }
  // ] 
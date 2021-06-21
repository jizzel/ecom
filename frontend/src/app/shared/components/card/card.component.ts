import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  addCartNotPressed=true;
  
  //Array of objects as dummy data for card.
  prdtInfo=[
    {prdtImage:"../../assets/images/sample-1.jpeg",
     prdtName:"Waist beads",
     prdtDescription:"I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively."  
    },

    {prdtImage:"../../assets/images/img1.jpg",
     prdtName:"Gold Earings",
     prdtDescription:"I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively."  
    },

    {prdtImage:"../../assets/images/img1.jpg",
     prdtName:"Pearl earings",
     prdtDescription:"I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively."  
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }


onPressCartButton(){
  this.addCartNotPressed= false;
}

}

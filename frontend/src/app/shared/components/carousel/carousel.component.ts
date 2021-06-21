import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit,AfterViewInit {
  options= {fullWidth:true,indicators: true, duration: 200}
  items=["../../assets/images/ring.jpeg", 
        "../../assets/images/ring.jpeg", 
        "../../assets/images/ring.jpeg",
        "../../assets/images/ring.jpeg"]

        
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems,this.options);
  }
}


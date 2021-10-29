import { Component, OnInit } from '@angular/core';

//this interface defines the charateristics the order should have
interface OrderItems{
  orderDate:Date;
  orderNumber: string;
  products:ProductType[];
}

interface ProductType{
  productImage:string;
  price:number;
  quantity:number;
  status:string;
}

@Component({
  selector: 'app-mine-orders',
  templateUrl: './mine-orders.component.html',
  styleUrls: ['./mine-orders.component.css']
})
export class MineOrdersComponent implements OnInit {
tableHeaders:string[]=[
  'Products',
  'Price',
  'Quantity',
  'Status'
]

// myOrderItems:OrderItems;
  constructor() { }

  ngOnInit(): void {
  }


 myOrderItems:OrderItems[]=[
    {
      orderDate:new Date(),
      orderNumber: 'GSHMGP00X0008RM',
      products:[{
        productImage:"../../assets/images/sample-1.jpeg", 
        price:42,
        quantity:2,
        status:"ordered"} ,
        {
          productImage:"../../assets/images/sample-1.jpeg", 
          price:45.99,
          quantity:2,
          status:"ordered"}, 
          {
            productImage:"../../assets/images/sample-1.jpeg", 
            price:2.49,
            quantity:2,
            status:"ordered"}, 
            {
              productImage:"../../assets/images/sample-1.jpeg", 
              price:23.00,
              quantity:2,
              status:"ordered"},
              {
                productImage:"../../assets/images/sample-1.jpeg", 
                price:59.00,
                quantity:2,
                status:"ordered"}
      ]
    }

        
  ]


  tableData={
    pin:'ben',
    ten:[
      'zen',
      'fen',
      'men'
    ]
  }

  printItems(){
    console.log(this.myOrderItems);
    console.log(this.myOrderItems[0]);
    console.log(this.myOrderItems[0].products);
    console.log(this.myOrderItems[0].products[0]);
    console.log(this.myOrderItems[0].products[0].productImage);
  }
}

// {
//   prdtName:"Gold Earing",
//   prdtImage:"../../assets/images/sample-1.jpeg",
//   prtPrice:"30"
// },
// {
//   prdtName:"Waist beads",
//   prdtImage:"../../assets/images/sample-1.jpeg",
//   prtPrice:"35"
// },
// {
//   prdtName:"Pearl Earings",
//   prdtImage:"../../assets/images/sample-1.jpeg",
//   prtPrice:"120"
// },
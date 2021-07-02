import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {globals} from "../../../globals";
import {ActivatedRoute} from "@angular/router";
import {PeriodicElement} from "../products/products.component";

interface Category {
  _id?: string;
  name: string
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = new FormGroup({
    price: new FormControl(''),
    categoryId: new FormControl(''),
    name: new FormControl(''),
    quantity: new FormControl('')
  });
  categoryName = new FormControl('');
  // @ts-ignore
  file: File = null;
  categories: Category[] = [];
  products: PeriodicElement[] =[];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = routeParams.get('productId');
    this.http.get(globals.baseUrl + '/category')
      .subscribe((cats) => {
        // @ts-ignore
        this.categories = cats;
    });
    this.http.get(globals.baseUrl + '/products')
      .subscribe(products => {
        // @ts-ignore
        this.products = products;
        // if(productId){
        //   const prod = this.products.find(product => productId === product._id);
        //   if (prod)
        //     if(prod._id) {
        //       const cat = this.categories.find( cat => cat._id === prod.categoryId)
        //       this.product.control.get('name').set(prod.name);
        //       this.product.control.get('categoryId').set(cat);
        //       this.product.control.get('price').set(prod.price);
        //       this.product.control.get('quantity').set(prod.quantity);
        //     }
        // }
      })
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('data', JSON.stringify(this.product.value));
    this.http.post(globals.baseUrl + '/products', formData)
      .subscribe(res => {
        console.log(res);
      });
  }

  onFileChange($event: Event) {
    const files: FileList | null = ($event.target as HTMLInputElement).files;
    if (files) {
      this.file = files[0];
    }
  }

  submitCategory() {
    this.http.post(globals.baseUrl + '/category', {categoryName: this.categoryName.value})
      .subscribe(res => console.log(res));
  }
}

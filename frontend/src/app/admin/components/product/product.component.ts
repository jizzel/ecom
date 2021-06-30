import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {globals} from "../../../globals";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = new FormGroup({
    price: new FormControl(''),
    categoryId: new FormControl(''),
    image: new FormControl(''),
    name: new FormControl(''),
  });
  // @ts-ignore
  file: File = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('data', JSON.stringify(this.product.value));
    this.http.post(globals.baseUrl + '/upload', formData)
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
}

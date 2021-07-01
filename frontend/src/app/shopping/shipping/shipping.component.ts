import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm, FormGroup, ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, Validators, NgModel } from '@angular/forms';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  buttonName:string="Place Order";

  // shippingForm: FormGroup;
  shippingForm:FormGroup = new FormGroup({
    'name': new FormControl('',Validators.required,),
    'email': new FormControl('',[Validators.required, Validators.email]),
    'userAddress': new FormGroup({
      'address1': new FormControl('',Validators.required),
      'address2': new FormControl('')
    }),
    'city': new FormControl('',Validators.required),
    'telephone':new FormControl('',Validators.required)
  });


  
  constructor() { }

  ngOnInit():void {
   // console.log(this.name?.touched);
   
  }

  onSubmit(){
    if(this.shippingForm.valid){
      console.log(this.shippingForm);
    }
  }

  get name(){
    return this.shippingForm.get('name');
  }

  get email(){
    return this.shippingForm.get('email');
  }

  get address(){
    return this.shippingForm.get('userAddress.address1');
  }

  get city(){
    return this.shippingForm.get('city');
  }

  get telephone(){
    return this.shippingForm.get('telephone');
  }
  
}


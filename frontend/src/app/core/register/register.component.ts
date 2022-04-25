import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
buttonName:string = 'CREATE ACCOUNT';
  constructor() { }

  ngOnInit(): void {
    this.registerForm= new FormGroup(
      {
        'firstName': new FormControl(null ,Validators.required),
        'lastName': new FormControl(null,Validators.required),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'password': new FormControl(null,Validators.required)
      }
    );
  }


  get firstName(){
    return this.registerForm.get('firstName');
  }

  get lastName(){
    return this.registerForm.get('lastName');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  onSubmit(){
    console.log(this.registerForm);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
resetPasswordForm: FormGroup;
buttonName1:string='SUBMIT'
buttonName2:string='Cancel'
  constructor() { }

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email])
    });
  }

  get email(){
    return this.resetPasswordForm.get('email');
  }

  onSubmit(){
    console.log(this.resetPasswordForm);
  }
}

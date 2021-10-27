import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  buttonName:string = "LOGIN"
  loginForm:FormGroup;
  loading = false;
  submitted = false;
  error = '';
  accountName:string;
  accountUserFirstName:string;

  constructor( private route: ActivatedRoute, private router: Router,
     private authenticationService: AuthenticationService) {
           // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }
     
         }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('' , [Validators.required])
    });
  }

  get email(){
    return this.loginForm.get('email');
  }
  
  get password(){
    return this.loginForm.get('password');
  }

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }


onSubmit(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
  this.authenticationService.login(this.f.email.value , this.f.password.value)
      .pipe(first())
      .subscribe({
          next: () => {
              // get return url from route parameters or default to '/'
              const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
              this.router.navigate([returnUrl]);
          },
          error: error => {
              this.error = error;
              this.loading = false;
          }
      }); 

      //assign the signed in username to accountUserName
      this.accountUserFirstName= this.authenticationService.currentUserValue.firstName;
      console.log("in the login component " +  this.accountUserFirstName);
}


}



import { Component, OnInit,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
import { Role } from 'src/app/Models/role';
import { AuthenticationService } from 'src/app/services/auth.service';
//import { Role } from '../Models/role';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  Role = Role;
  accountName:string;
  accountUserFirstName:string;
  constructor( private authService: AuthenticationService, private router: Router,) { }

  ngOnInit(): void {
  }

    ngAfterViewInit(){
      const elemsDropdown = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elemsDropdown,{
        //this option prevents the dropdown options from covering the dropdown title
        hover:true,
        constrainWidth:false,
        coverTrigger:false
      });

      // const sideBarElems = document.querySelectorAll('.sidenav');
      // M.Sidenav.init(sideBarElems,{edge:"left"});
     
    }

    signOut(){
      this.authService.logout();
      this.router.navigate(['/']);
    }

    get isAuthorized(){
      //this is called several times dont know why
      console.log(this.authService.currentUserValue.firstName);
      this.accountUserFirstName=this.authService.currentUserValue.firstName;
      return this.accountUserFirstName;
    }

    // get isAuthorized() {
    //   return this.authService.isAuthorized();
    // }
}

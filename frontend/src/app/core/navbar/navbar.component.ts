import { Component, OnInit,AfterViewInit} from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

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

    
}

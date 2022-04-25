import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.css']
})
export class RaisedButtonComponent implements OnInit {

  @Input() buttonName: string = '';
  @Input() raisedButtonColor:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}

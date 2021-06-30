import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['position', 'name', 'category', 'price', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter($event: KeyboardEvent) {

  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  category: string;
  price: number;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', category: 'abc', price: 1.0079,  action: 'H'},
  {position: 2, name: 'Helium', category: 'abc', price: 4.0026,  action: 'He'},
  {position: 3, name: 'Lithium', category: 'abc', price: 6.941, action: 'Li'},
  {position: 4, name: 'Beryllium', category: 'abc', price: 9.0122,  action: 'Be'},
  {position: 5, name: 'Boron', category: 'abc', price: 10.811,  action: 'B'},
  {position: 6, name: 'Carbon', category: 'abc', price: 12.0107, action: 'C'},
  {position: 7, name: 'Nitrogen', category: 'abc', price: 14.0067, action: 'N'},
  {position: 8, name: 'Oxygen', category: 'abc', price: 15.9994, action: 'O'},
  {position: 9, name: 'Fluorine', category: 'abc', price: 18.9984, action: 'F'},
  {position: 10, name: 'Neon', category: 'abc', price: 20.1797, action: 'Ne'},
  {position: 11, name: 'Sodium', category: 'abc', price: 22.9897, action: 'Na'},
  {position: 12, name: 'Magnesium', category: 'abc', price: 24.305,  action: 'Mg'},
  {position: 13, name: 'Aluminum', category: 'abc', price: 26.9815, action: 'Al'},
  {position: 14, name: 'Silicon', category: 'abc', price: 28.0855, action: 'Si'},
  {position: 15, name: 'Phosphorus', category: 'abc', price: 30.9738, action: 'P'},
  {position: 16, name: 'Sulfur', category: 'abc', price: 32.065,  action: 'S'},
  {position: 17, name: 'Chlorine', category: 'abc', price: 35.453,  action: 'Cl'},
  {position: 18, name: 'Argon', category: 'abc', price: 39.948,  action: 'Ar'},
  {position: 19, name: 'Potassium', category: 'abc', price: 39.0983, action: 'K'},
  {position: 20, name: 'Calcium', category: 'abc', price: 40.078,  action: 'Ca'},
];


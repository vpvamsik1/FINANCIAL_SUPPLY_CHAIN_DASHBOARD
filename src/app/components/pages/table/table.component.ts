import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  isCollapsed: boolean = true;
  isCollapsed2: boolean = true;
  constructor() { }

  toggleCollapsed() {

    this.isCollapsed = !this.isCollapsed;

  }

  toggleCollapsed2() {

    this.isCollapsed2 = !this.isCollapsed2;

  }

  ngOnInit() {
  }

  changeClass(){
    console.log("sdffrref");
  }

  

}

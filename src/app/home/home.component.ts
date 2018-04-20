import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.fixedCols = (window.innerWidth <= 600) ? 1 : 3;
  }

  onResize(event) {
    this.fixedCols = (event.target.innerWidth <= 600) ? 1 : 3;
  }

  fixedCols = 3;
  fixedRowHeight = 200;

  accountName = "Steve Smith";
  accountNumber = "6DUJ218";

}

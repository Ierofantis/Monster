import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  data: Object[];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        testHeader:"Test One",
        test:"one"
      },
      {
        testHeader:"Test Two",
        test:"two"
      },
      {
        testHeader:"Test Three",
        test:"three"
      },
    ];
  }
  

}

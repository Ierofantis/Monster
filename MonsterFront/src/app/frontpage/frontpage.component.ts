import { Component, OnInit } from '@angular/core';
import { FrontpageService } from '../frontpage/frontpage.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})

export class FrontpageComponent implements OnInit {
  public data;

  constructor(public frontpageService: FrontpageService) { }

  ngOnInit() {
    this.data = this.frontpageService.getAllObj().subscribe(posts => this.data = posts);
    this.data = Array.of(this.data);
    // this.data = accdetailservice;
  }

}

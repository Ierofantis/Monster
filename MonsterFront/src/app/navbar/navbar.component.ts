import { Component, OnInit } from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public tokenNotExpired = tokenNotExpired('jwtToken');

  constructor() { }

  ngOnInit() {
  }
}




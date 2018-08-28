import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
   
  }
  public getLoop()
  {
      this.http
          .get('http://localhost:3000/api/mainLoop')
          .subscribe ((data: Response) => console.log(data));
  }
}

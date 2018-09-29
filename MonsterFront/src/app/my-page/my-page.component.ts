import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
  user_list;
  article_list;
  decodeUsername;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //  this.http
    // .get('http://localhost:3000/api/mainLoop')
    // .subscribe(resp => {
    // this.data = resp;
     this.getUsers();
  
}

getUsers(){
  this.http.get('http://localhost:3000/api/mainLoop').subscribe(resp => {    
    this.user_list = resp;
    for(var i=0; i<this.user_list.length; i++){
      if(localStorage.getItem('jwtToken') != undefined){
      this.decodeUsername = jwt_decode(localStorage.getItem('jwtToken')).username;
      if(this.user_list[i].username === this.decodeUsername){
        this.article_list = this.user_list;
      }
    }
   }
    //if(this.user_list.username == this.decodeUsername ){
   // console.log(this.user_list.length)
   // }
  }, err => {
   console.log(err)
  });
 };
}

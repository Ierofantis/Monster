import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import * as $ from 'jquery';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  user_list: any;
  article_list: any[] = [];
  decodeUsername: any;
  values: any[] = [];
  $: any;
  htmlVariable: string;
  
  loop: any ="";
   title:any="";
  
  decoded = jwt_decode(localStorage.getItem('jwtToken'));
  articleComment : any ="";
  data: any;  
  message = '';
  comment: any ="";

  constructor(private http: HttpClient) {this.articleComment = {comment:this.comment} }

  ngOnInit() {
    this.getUsers();
  }
  addComment(){
    this.http.post('http://localhost:3000/api/comment', this.articleComment).subscribe(resp => {
      this.data = resp;
      console.log(this.data)
    }, err => {
      this.message = err.error.msg;
    });  
  }

  getUsers() {

    this.http.get('http://localhost:3000/api/mainLoop').subscribe(resp => {
      this.user_list = resp;

      if (localStorage.getItem('jwtToken') != undefined) {

        for (var i = 0; i < this.user_list.length; i++) {
          this.decodeUsername = jwt_decode(localStorage.getItem('jwtToken')).username;

          if (this.user_list[i].username === this.decodeUsername) {
            // for (var key in this.user_list) {
               this.values.push(this.user_list[i]);               
           // }    
           // this.article_list = this.user_list;   
          }
        }
        // for (var i = 0; i < this.values.length; i++) {
        // this.article_list.push(this.values[i].loop,this.values[i].title);
        // }
        // for (var i = 0; i < this.article_list.length; i++) {
        //  $('<div class="grid-item"/>').html(this.article_list[i]).appendTo('.grid-container');
        // this.htmlVariable = this.article_list[i];        
        // }
      }
    }, err => {
      console.log(err)
    });
  };
}

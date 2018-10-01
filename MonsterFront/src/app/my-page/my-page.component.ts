import { Component, OnInit} from '@angular/core';
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:3000/api/mainLoop').subscribe(resp => {

      this.user_list = resp;

      if (localStorage.getItem('jwtToken') != undefined) {

        for (var i = 0; i < this.user_list.length; i++) {
          this.decodeUsername = jwt_decode(localStorage.getItem('jwtToken')).username;

          if (this.user_list[i].username === this.decodeUsername) {
            for (var key in this.user_list) {
              this.values.push(this.user_list[key])
            }       
            this.article_list.push(this.values[i].loop);            
          }
        }        
        for (var i = 0; i < this.article_list.length; i++) {         
          $('<div class="grid-item"/>').html(this.article_list[i]+ "<h4>delete/edit</h4>").appendTo('.grid-container');        
        }
      }
    }, err => {
      console.log(err)
    });
  };
}

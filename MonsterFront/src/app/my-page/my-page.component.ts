import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
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
  loop: any = "";
  title: any = "";
  //decoded = jwt_decode(localStorage.getItem('jwtToken'));
  articleComment: any = "";
  articleData: any = "";
  data: any;
  message = '';
  comment: any;
  getComment: any;
  ArticleId: any;
  commentValues: any[] = [];
  deleteArticles: any;
  userProfiles: any;

  constructor(private http: HttpClient, private router: Router) { this.articleComment = { comment: this.comment } }

  ngOnInit() {
    this.getUsers();
    this.getComments();
  }

  addComment(ArticleId) {

    this.articleComment = { ArticleId: ArticleId, comment: this.comment };
    this.http.post('http://localhost:3000/api/comment', this.articleComment).subscribe(resp => {
      this.comment = resp;
    }, err => {
      this.message = err.error.msg;
    });
  }

  getUserProfile(username) {  
     this.router.navigate(['/my-page', username]);
  };

  deleteArticle(id) {    
    this.articleData = { id: id };
    this.http.post('http://localhost:3000/api/destroy', this.articleData).subscribe(resp => {
      this.deleteArticles = resp;
    }, err => {
      this.message = err.error.msg;
    });
  }

  getComments() {

    this.http.get('http://localhost:3000/api/getComments').subscribe(resp => {
      this.getComment = resp;
      for (var i = 0; i < this.getComment.length; i++) {
        this.commentValues.push(this.getComment[i]);
      }
    });
  };

  getUsers() {

    this.http.get('http://localhost:3000/api/mainLoop').subscribe(resp => {
      this.user_list = resp;
      // if (localStorage.getItem('jwtToken') != undefined) {

      for (var i = 0; i < this.user_list.length; i++) {
        // this.decodeUsername = jwt_decode(localStorage.getItem('jwtToken')).username;
        // if (this.user_list[i].username === this.decodeUsername) {
        this.values.push(this.user_list[i]);
      }
      //  }
      //}
    }, err => {
      console.log(err)
    });
  };
}

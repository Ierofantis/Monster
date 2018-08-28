import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import * as jwt_decode from 'jwt-decode';
import { FroalaEditorDirective } from 'angular-froala-wysiwyg';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
 // @Input() editorContent;
   loop: any ="";

  oParser = new DOMParser();
  oDOM = this.oParser.parseFromString(this.loop, "text/html");
  text = this.oDOM.body.innerText;

  decoded = jwt_decode(localStorage.getItem('jwtToken'));
  articleData : any ="";
  data: any;
  
  message = '';

  constructor(private http: HttpClient, private router: Router) {this.articleData = {loop:this.loop, username:this.decoded.username }; }

  ngOnInit() {}

  articlePost(){
    //debugger;
    //localStorage.getItem('jwtToken');
   
    this.articleData = {loop:this.loop, username:this.decoded.username}
    console.log(this.articleData)   
    this.http.post('http://localhost:3000/api/article', this.articleData).subscribe(resp => {
      this.data = resp;
      console.log(this.data)
    }, err => {
      this.message = err.error.msg;
    });
  }
}

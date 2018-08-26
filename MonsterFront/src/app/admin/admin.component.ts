import { Component, OnInit } from '@angular/core';
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
  editorContent: any;
  decoded = jwt_decode(localStorage.getItem('jwtToken'));
  articleData = { loop:this.editorContent, username:this.decoded.username };
  data: any;
  
  message = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {}

  articlePost(){
    //localStorage.getItem('jwtToken');
    console.log(this.articleData.loop)
    this.http.post('http://localhost:3000/api/article',this.articleData).subscribe(resp => {
      this.data = resp;
      console.log(this.data)
    }, err => {
      this.message = err.error.msg;
    });
  }
}

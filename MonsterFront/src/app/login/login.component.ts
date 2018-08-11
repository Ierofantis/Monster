import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  loginData = { username:'', password:'' };
  message = '';
  data: any;
  ngOnInit() {
  }
  login() {
    this.http.post('http://localhost:3000/api/signin',this.loginData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      this.router.navigate(['books']);
    }, err => {
      this.message = err.error.msg;
    });
  }
}

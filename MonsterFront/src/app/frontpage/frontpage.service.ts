import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class FrontpageService {
  private url = 'http://localhost:3000/';
  constructor(public http: HttpClient) { }

  getPublicDeals() {   
    this.http.get(this.url).
    subscribe((res: Response) => {
       console.log(res);
    });
  }
}

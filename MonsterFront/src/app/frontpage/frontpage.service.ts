import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FrontpageService {
  private url = 'http://localhost:3000/';
  constructor(public http: HttpClient) { }

  getAllObj() {
    return this.http.get(this.url);    
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  username: string;
  private sub: any;
  userProfiles: any;
  valuesUsers: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {    
    this.route.queryParams.subscribe(params => {
      let date = params['username'];
      console.log(date); // Print the parameter to the console. 
  });
  }

  ngOnInit() {
    console.log(this.username)
    this.sub = this.route.params.subscribe(params => {
      this.http.get('http://localhost:3000/api/getUserProfile/' + params.id).subscribe(resp => {
        this.userProfiles = resp;       
      });
    });
  }
}

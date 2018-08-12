import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.component.html',
  styleUrls: ['./auth-guard.component.css']
})
export class AuthGuardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(tokenNotExpired('jwtToken')) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}

import { AuthService } from './../Services/auth.service';
import { Injectable } from '@angular/core';
import {  CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) {

  }

  canActivate(route, state: RouterStateSnapshot): boolean {
    if(this._authService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }})
      return false
    }
  }
}

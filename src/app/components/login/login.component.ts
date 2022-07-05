import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService, private _router: Router,private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
        localStorage.setItem('token', res.token)
        this._router.navigate([returnUrl || '/special'])
      },
      err => console.log(err)
    )
  }

}

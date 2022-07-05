import { AuthService } from './Services/auth.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  paymentHandler:any = null;
  success:boolean = false;
  failure:boolean = false;
  authService: any;
  constructor(private _authService: AuthService) {}
  // Method when component executes
  ngOnInit(){
    this.authService = this._authService
  }


}

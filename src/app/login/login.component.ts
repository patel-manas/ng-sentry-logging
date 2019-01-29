import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
   password: string;
  constructor(private _r: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username , this.password);
    sessionStorage.setItem('user', this.username ? this.username : 'unknown user');
    this._r.navigateByUrl('/app');
    // (['/app']);
    }
}

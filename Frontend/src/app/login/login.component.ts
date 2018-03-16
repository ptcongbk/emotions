import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  info = {
    username: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  userLogin() {
    // console.log(this.info);
    if (!this.info.username || !this.info.password) {
      return ;
    } else {
      if (this.auth.login({username: this.info.username, password: this.info.password})) {
        this.router.navigate(['/dashboard']);
      }
    }
  }

}

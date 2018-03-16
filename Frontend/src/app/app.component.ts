import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  info = {
    title: 'Modemos',
    isUserLogin: false
  };

  constructor(private auth: AuthService) {
    this.info.isUserLogin = this.auth.getUserLogin();
  }

}

import { Component } from '@angular/core';

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

  constructor() {
    //this.info.isUserLogin = this.auth.getUserLogin();
  }

}

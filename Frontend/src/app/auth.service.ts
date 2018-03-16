import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthService {

  private isUserLogin;
  private useername;

  constructor() {
    this.isUserLogin = false;
  }

  login (data?: any) {
    if (data.username === 'admin' && data.password === 'admin@123') {
      this.setUserLogin(true);
      return true;
    }
  }

  logout() {
    this.setUserLogin(false);
  }

  setUserLogin(state: boolean) {
    this.isUserLogin = state;
  }

  getUserLogin() {
    return this.isUserLogin;
  }

}

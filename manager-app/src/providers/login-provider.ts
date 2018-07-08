import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';

@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) { }

  login(login: LoginModel) {
    // return this.http.post<any>('http://ec2-54-218-220-67.us-west-2.compute.amazonaws.com:8080/users/login', { username: login.username, password: login.password, usertype: login.usertype });
    return this.http.post<any>('http://localhost:8080/users/login', { username: login.username, password: login.password, usertype: login.usertype });
  }
}

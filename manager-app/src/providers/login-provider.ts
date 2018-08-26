import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { Api } from '.';
import "rxjs/add/operator/share";
import { BaseProvider } from './base-provider';

@Injectable()
export class LoginProvider extends BaseProvider{

  constructor(public http: HttpClient, public api: Api) { 
    super(http, null);
  }

  login(login: LoginModel) {    
    return this.http.post<any>(this.url + 'users/login',
      {
        username: login.username,
        password: login.password,
        usertype: 2
      });
  }
}

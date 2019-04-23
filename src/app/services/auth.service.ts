import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  baseUrl = 'https://fierce-forest-53940.herokuapp.com/users';
  constructor(protected http: HttpClient, protected router: Router) {
  }
  register(data: RegisterData) {
    this.http.post(this.baseUrl, data, {headers: this._getHeaders()});
  }

  login(email: string, password: string) {
    const data = {
      email,
      password
    };
    return this.http.post(this.baseUrl, data, {headers: this._getHeaders()});
  }

  private _getHeaders() {
    const headers = new HttpHeaders();
    return headers;
  }
}

export interface RegisterData {
  firstname: string;
  lastname?: string;
  email: string;
  password: string;
  homeAddress: string;
  shippingAddress: string;
}

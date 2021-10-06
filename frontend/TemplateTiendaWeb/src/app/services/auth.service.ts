import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_API = "http://localhost:4000/user/"
  
  constructor(private http: HttpClient) {}

  signUp(user: User): Promise<any>{
    return this.http.post(this.URL_API + 'signup', user).toPromise();
  }

  signIn(user: User): Promise<any>{
    console.log(user);
    return this.http.post(this.URL_API + 'signin', user).toPromise();
  }
}

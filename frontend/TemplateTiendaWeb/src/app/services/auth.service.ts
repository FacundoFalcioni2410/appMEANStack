import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_API = "http://localhost:4000/user/"
  currentUser: any;

  constructor(private http: HttpClient) {}

  signUp(user: User){
    this.http.post(this.URL_API + 'signup', user).toPromise().then((res: any) =>{
      console.log(res);
    });;
  }

  signIn(user: User){
    this.http.post(this.URL_API + 'signin', user).toPromise().then((res: any) =>{
      res.user.date = Date.now();
      this.currentUser = res.user;
      localStorage.setItem('user', JSON.stringify(res.user));
    });
  }

  signOut(){
    this.currentUser = null;
    localStorage.removeItem('user');
  }
}

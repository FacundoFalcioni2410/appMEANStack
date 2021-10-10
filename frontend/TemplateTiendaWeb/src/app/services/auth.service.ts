import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_API = "http://localhost:4000/user/"
  currentUser: any;

  constructor(private http: HttpClient, private router: Router) {}

  signUp(user: User){
    this.http.post(this.URL_API + 'signup', user).toPromise().then((res: any) =>{
      console.log(res);
    });;
    this.router.navigate(['/']);
  }

  signIn(user: any){
    this.http.post(this.URL_API + 'signin', user).toPromise().then((res: any) =>{
      this.currentUser = res.user;
      localStorage.setItem('token', JSON.stringify(res.token));
    });
    this.router.navigate(['/']);
  }

  verifyToken(token: string){
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    return this.http.get(this.URL_API + 'token', {headers: headers}).toPromise();
  }

  signOut(){
    this.currentUser = null;
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}

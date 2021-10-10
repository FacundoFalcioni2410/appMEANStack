import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentToken: any | null;
  resToken: any = null;

  constructor(private auth: AuthService){
    let token = localStorage.getItem('token');
    this.currentToken = token !== null ? JSON.parse(token) : null;
    if(this.currentToken)
    {
      this.auth.verifyToken(this.currentToken).then( res =>{
        this.resToken = res;
        if(this.resToken.success)
        {
          this.auth.currentUser = this.resToken.user;
          console.log(this.auth.currentUser);
        }
      }).catch( err =>{
        this.auth.currentUser = null;
        localStorage.removeItem('token');
      });
    }
  }
}

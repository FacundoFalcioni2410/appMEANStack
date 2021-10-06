import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentUser: any | null;

  constructor(private auth: AuthService){
    console.log('test');
    
      let user = localStorage.getItem('user');
      this.currentUser = user !== null ? JSON.parse(user) : null;
      if(this.currentUser)
      {
        console.log(this.currentUser);
        let date = Date.now();
        let resultado = date - this.currentUser.date;
        console.log(resultado);
        if(resultado > 86400000)
        {
          this.auth.currentUser = null;
        }
        else
        {
          this.auth.currentUser = this.currentUser;
        }
      }
  }
}

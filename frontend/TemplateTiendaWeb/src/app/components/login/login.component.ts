import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  signIn: any = false;

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      profile: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  signUp(){
    let user: User = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      profile: this.form.get('profile')?.value,
    }
    if(!this.signIn)
    {
      this.auth.signUp(user)
      .then( res => console.log(res))
      .catch( res => console.error(res));
    }
    else
    {
      delete user.profile;

      this.auth.signIn(user)
      .then( res => console.log(res))
      .catch( res => console.error(res));
    }

  }

}

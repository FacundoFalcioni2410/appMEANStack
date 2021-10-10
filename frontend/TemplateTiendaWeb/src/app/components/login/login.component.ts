import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.validadorDeEspacios]],
      profile: ['empleado', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  signIn(){

    let user: any = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    }
      this.auth.signIn(user);
  }

  private validadorDeEspacios(control : AbstractControl) : null | object {

    let nombre : string = control.value;

    let espacios = nombre.includes(' ');

    if(espacios){
      return {validadorDeEspacios : true};
    }else{
      return null;
    }
  }
}

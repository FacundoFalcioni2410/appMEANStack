import { Address } from './../../models/address';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  signIn: any = false;

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      dni: ['', Validators.required],
      address: ['', Validators.required],
    })
  }


  ngOnInit(): void {
  }

  signUp(){
    let address: Address = {
      postalCode: this.form.get('postalCode')?.value,
      address: this.form.get('address')?.value,
      city: this.form.get('city')?.value,
    }
    let user: User = {
            email: this.form.get('email')?.value,
            dni: this.form.get('dni')?.value,
            password: this.form.get('password')?.value,
            address: address,
            phoneNumber: this.form.get('phoneNumber')?.value,
    }

    this.auth.signUp(user);
  }

}

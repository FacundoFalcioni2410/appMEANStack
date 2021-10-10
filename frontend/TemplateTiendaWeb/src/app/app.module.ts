import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from './../environments/environment.prod';
import { ProductosModule } from './components/productosModule/productos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './components/home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
  
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarritoComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ProductosModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  API_URL = 'http://localhost:4000/cart/'

  constructor(private http :HttpClient) {
  }

  getCart(id: string){
    return this.http.get<Cart>(this.API_URL + id);
  }

  emptyCart(id: string)
  {
    return this.http.put(this.API_URL, {cartID: id});
  }

  addProduct(product: any, id: string){
    return this.http.post(this.API_URL, {cartID: id, product: product});
  }
}

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

  // addProducto(producto: any){
  //   let currentCart = localStorage.getItem('carrito');
  //   let currentCartArray = currentCart !== null ? JSON.parse(currentCart) : [];
  //   let existe = false;

  //   if(currentCartArray.length)
  //   {
  //     for(let item of currentCartArray)
  //     {
  //       if(item.itemID === producto.itemID)
  //       {
  //         existe = true;
  //       }
  //     }
  //   }

  //   if(!existe)
  //   {
  //     currentCartArray.push(producto);
  //   }

  //   localStorage.setItem('carrito', JSON.stringify(currentCartArray));
  // }

  // removeProducto(producto: any){
  //   let currentCart = localStorage.getItem('carrito');
  //   let currentCartArray =  currentCart !== null ? JSON.parse(currentCart) : null;
  //   let index = currentCartArray.indexOf(producto);

  //   if(index !== -1)
  //   {
  //     currentCartArray.splice(index,1);
  //   }
  //   localStorage.setItem('carrito', JSON.stringify(currentCartArray));

  // }

  // getTotalItems(){
  //   let currentCart = localStorage.getItem('carrito');
  //   let currentCartArray =  currentCart !== null ? JSON.parse(currentCart) : null;
  //   return currentCartArray.length;
  // }

  // emptyCart(){
  //   localStorage.removeItem('carrito');
  // }
}

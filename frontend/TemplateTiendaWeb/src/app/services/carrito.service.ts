import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }


  addProducto(producto: any){
    let currentCart = localStorage.getItem('carrito');
    let currentCartArray = currentCart !== null ? JSON.parse(currentCart) : [];
    let existe = false;

    if(currentCartArray.length)
    {
      for(let item of currentCartArray)
      {
        if(item.itemID === producto.itemID)
        {
          existe = true;
        }
      }
    }

    if(!existe)
    {
      currentCartArray.push(producto);
    }

    localStorage.setItem('carrito', JSON.stringify(currentCartArray));
  }

  removeProducto(producto: any){
    let currentCart = localStorage.getItem('carrito');
    let currentCartArray =  currentCart !== null ? JSON.parse(currentCart) : null;
    let index = currentCartArray.indexOf(producto);

    if(index !== -1)
    {
      currentCartArray.splice(index,1);
    }
    localStorage.setItem('carrito', JSON.stringify(currentCartArray));

  }

  getTotalItems(){
    let currentCart = localStorage.getItem('carrito');
    let currentCartArray =  currentCart !== null ? JSON.parse(currentCart) : null;
    return currentCartArray.length;
  }

  emptyCart(){
    localStorage.removeItem('carrito');
  }
}

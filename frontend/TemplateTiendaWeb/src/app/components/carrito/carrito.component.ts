import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  productos: any = [];

  constructor(private cart: CarritoService) {
  }

  ngOnInit(): void {
    const productos = localStorage.getItem('carrito');
    this.productos = productos !== null ? JSON.parse(productos) : [];
  }

  emptyCart(){
    this.cart.emptyCart();
    const productos = localStorage.getItem('carrito');
    this.productos = productos !== null ? JSON.parse(productos) : [];
  }

}

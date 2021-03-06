import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  API = 'http://localhost:4000/';
  cartObs: Observable<any> | undefined;
  cart: any;
  id = 0;
  totalPrice: number = 0;
  
  productos: any = [];

  constructor(private cartS: CartService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.cartObs = this.cartS.getCart(this.id.toString());
    this.getCart();
  }

  getCart(){
    this.cartObs?.subscribe( cart =>{
      this.cart = cart;
      this.getTotalPrice();
    });
  }

  emptyCart(){
    this.cartS.emptyCart(this.cart._id).subscribe( (value: any) =>{
      this.cart = value;
    });
    this.totalPrice = 0;
  }

  getTotalPrice(){
    for(let product of this.cart?.products)
    {
      let productTotal = product.price * product.quantity;
      this.totalPrice += productTotal;
    }
  }

}

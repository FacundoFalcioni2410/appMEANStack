import { Product } from './../../models/product';
import { ApiProductService } from './../../services/api-product.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  API = 'http://localhost:4000/';
  products: Observable<Product[]>;
  productos: any = [];
  selectedOrder: any;
  currentUser: any;

  constructor(private router: Router, private cartS: CartService, private apiProduct: ApiProductService) {
    this.products = this.apiProduct.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
    let user = localStorage.getItem('user');
    this.currentUser =  user !== null ? JSON.parse(user) : null;
  }

  getProducts(){
    this.products.subscribe( (products) =>{
      this.productos = products;
      for(let item of this.productos)
      {
        item.imagePath = this.API + item.imagePath;
      }
      this.sortByID();
      console.log(this.productos);
    });
  }

  addToCart(product: any, ){
    product.quantity = 1;
    this.cartS.addProduct(product, this.currentUser.cartID).subscribe((res) =>{
      console.log(res);
    });
  }

  navigateProduct(itemID: string){
    this.router.navigate(['/productos', itemID]);
  }

  navigateCart(){
    this.router.navigate(['/carrito', this.currentUser.cartID]);
  }

  sortByPriceAsc(){
    this.productos.sort((x: any,y: any)=>{
      return x.price - y.price;
    });
  }

  sortByPriceDesc(){
    this.productos.sort((x: any,y: any)=>{
      return y.price - x.price;
    });
  }


  sortByID(){
    this.productos.sort((x: any,y: any)=>{
      return x.itemID - y.itemID;
    });
  }

  onChangeOrder(){
    if(this.selectedOrder === 'precioAsc')
    {
      this.sortByPriceAsc();
    }
    else if(this.selectedOrder === 'precioDesc')
    {
      this.sortByPriceDesc();
    }
  }
}

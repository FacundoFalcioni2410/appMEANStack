import { Product } from './../../models/product';
import { ApiProductService } from './../../services/api-product.service';
import { CarritoService } from './../../services/carrito.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  products: Observable<Product[]>;
  productos: any = [];
  selectedOrder: any;

  constructor(private router: Router, private cart: CarritoService, private apiProduct: ApiProductService) {
    this.products = this.apiProduct.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.products.subscribe( (products) =>{
      this.productos = products;
      this.sortByID();
      console.log(this.productos);
    });
  }

  addToCart(producto: any){
    this.cart.addProducto(producto);
  }

  navigate(itemID: string){
    this.router.navigate(['/productos', itemID]);
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

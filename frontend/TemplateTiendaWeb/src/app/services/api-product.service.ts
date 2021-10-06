import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  URL_API = "http://localhost:4000/product/"
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProduct(id: string)
  {
    return this.http.get<Product>(this.URL_API + id);
  }

  getProducts()
  {
    return this.http.get<Product[]>(this.URL_API);
  }

  addProduct(product: any)
  {
    return  this.http.post(this.URL_API, product);
  }
}

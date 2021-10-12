import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  URL_API = "http://localhost:4000/product/"
  products: Product[] = [];
  modifyProduct: any = null;

  constructor(private http: HttpClient) {}

  getProduct(id: string)
  {
    return this.http.get<Product>(this.URL_API + id).toPromise();
  }

  getProducts()
  {
    return this.http.get<Product[]>(this.URL_API);
  }

  addProduct(product: any)
  {
    return  this.http.post(this.URL_API, product);
  }

  updateProduct(product: any, id: string)
  {
    return this.http.put(this.URL_API + id, product).toPromise();
  }

  deleteProduct(id: string)
  {
    return this.http.delete(this.URL_API + id).toPromise();
  }
}

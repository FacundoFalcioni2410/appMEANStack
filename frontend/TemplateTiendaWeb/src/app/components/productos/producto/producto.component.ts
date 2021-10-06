import { ApiProductService } from './../../../services/api-product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  API = 'http://localhost:4000/';
  products: Observable<any> | undefined;
  producto: any;
  id = 0;

  constructor(public route: ActivatedRoute, private router: Router, private apiProduct: ApiProductService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.products = this.apiProduct.getProduct(this.id.toString());
    this.getProduct();
  }

  getProduct(){
    this.products!.subscribe( (products) =>{
      this.producto = products;
      this.producto.imagePath = this.API + this.producto.imagePath;
    });
  }

  navigate(itemID: string){
    this.router.navigate([`./${itemID}`]);
  }

}

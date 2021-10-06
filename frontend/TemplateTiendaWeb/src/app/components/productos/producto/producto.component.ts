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

  products: Observable<any> | undefined;
  producto: any;
  id = 0;

  constructor(public route: ActivatedRoute, private router: Router, private firestore: FirestoreService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.products = this.firestore.getProducto(this.id.toString());
    this.products.subscribe( (product) =>{
      this.producto = product;
    });
  }

  navigate(itemID: string){
    this.router.navigate([`./${itemID}`]);
  }

}

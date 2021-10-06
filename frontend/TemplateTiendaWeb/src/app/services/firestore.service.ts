import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService{

  products: Observable<any>

  constructor(private firestore: AngularFirestore) {
    this.products = this.firestore.collection('products').valueChanges({idField: 'id'});
  }

  getProducto(id: string){
    return this.firestore.collection('products').doc(id).valueChanges({idField: 'id'});
  }
}

import { ProductosComponent } from './productos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductoComponent,
    ProductosComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }

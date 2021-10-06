import { ProductosComponent } from './productos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';


@NgModule({
  declarations: [
    ProductoComponent,
    ProductosComponent,
    AltaProductoComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }

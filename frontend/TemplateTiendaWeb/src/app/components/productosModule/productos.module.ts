import { ModificarProductoComponent } from '../productosComponents/modificar-producto/modificar-producto.component';
import { ProductosComponent } from './productos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from '../productosComponents/producto/producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaProductoComponent } from '../productosComponents/alta-producto/alta-producto.component';
import { NotFoundComponent } from '../productosComponents/not-found/not-found.component';


@NgModule({
  declarations: [
    ProductoComponent,
    ProductosComponent,
    AltaProductoComponent,
    NotFoundComponent,
    ModificarProductoComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }

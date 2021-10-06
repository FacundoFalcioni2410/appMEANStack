import { ProductosComponent } from './productos.component';
import { ProductoComponent } from './producto/producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'productos/:id',
    component: ProductoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }

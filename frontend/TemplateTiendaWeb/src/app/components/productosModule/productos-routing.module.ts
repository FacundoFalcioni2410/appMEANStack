import { ModificarProductoComponent } from '../productosComponents/modificar-producto/modificar-producto.component';
import { NotFoundComponent } from '../productosComponents/not-found/not-found.component';
import { AltaProductoComponent } from '../productosComponents/alta-producto/alta-producto.component';
import { ProductosComponent } from './productos.component';
import { ProductoComponent } from '../productosComponents/producto/producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'productos/alta',
    component: AltaProductoComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'productos/modificar',
    component: ModificarProductoComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'productos/error',
    component: NotFoundComponent
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './product/components/add-product/add-product.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  // {
  //   path: 'view-cart',
  //   component:
  // },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

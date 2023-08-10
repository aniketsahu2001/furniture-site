import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCartComponent } from './components/mini-cart/mini-cart.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    MiniCartComponent,
    // CartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // CartComponent
  ]
})
export class CartModule { }

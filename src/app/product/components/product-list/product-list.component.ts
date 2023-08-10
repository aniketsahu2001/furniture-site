import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../product.service';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  furnitureImages: string[] = [
    './assets/images/p1.png',
    './assets/images/p2.png',
    './assets/images/p3.png',
    './assets/images/p4.png',
    './assets/images/p5.png',
    './assets/images/p6.png',
    './assets/images/p7.png',
    './assets/images/p8.png',
    './assets/images/p9.png',
    './assets/images/p10.png',
    './assets/images/p11.png',
    './assets/images/p12.png'
  ];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  // apiData: ApiResponse | null = null;
  isLoading = true;

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.getApiData().subscribe((products) => {
      this.products = products;
    });
    this.fetchProducts();  
  }

  fetchProducts(): void {
    // Let's say this fetches products from a backend
    this.products = this.products;

    this.products.forEach(product => {
      const randomIndex = Math.floor(Math.random() * this.furnitureImages.length);
      product.imageSrc = this.furnitureImages[randomIndex];
    });
  }
  
}

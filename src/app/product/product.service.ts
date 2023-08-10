import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // baseUrl = 'http://localhost:8081/furniture-api/furniture';

  // constructor(private http: HttpClient){}

  // addProduct(newProduct: Omit<Product, 'id'>){
  //   return this.http.post(this.baseUrl, newProduct);
  // }

  private apiUrl = 'http://localhost:8081/furniture-api/furniture';

  products: Product[] = [];
  constructor(private http: HttpClient) {
    this.http

      .get('http://localhost:8081/furniture-api/furniture')

      .subscribe(
        (response) => {
          for (var item of response as any[]) {
            const prod: Product = {
              seater: parseInt(item.id),
              name: item.name,
              price: parseInt(item.cost),
              upholstery: item.upholstery,
              colour: item.colour,
            };
            this.products.push(prod);
          }
          console.log(this.products);
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
  }

  addProduct(product: Product) {
    console.log(product, 'addd');
    return this.http
      .post('http://localhost:8081/furniture-api/furniture/add', product)
      .subscribe((data) => console.log('Successssssssssssss'));
  }

  getApiData() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProducts() {
    return this.products;
  }
}

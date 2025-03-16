import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { id: 1, name: 'Laptop', description: 'Dell inspiron', manufacturer: 'Dell', price: 1000, quantity: 10 },
    { id: 2, name: 'Smartphone', description: 'Samsung Series', manufacturer: 'Samsung', price: 700, quantity: 20 }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }

  addProduct(product: any) {
    product.id = this.products.length + 1;
    this.products.push(product);
  }

  updateProduct(updatedProduct: any) {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}

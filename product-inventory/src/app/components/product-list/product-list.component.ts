import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  searchProducts(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }
  
  viewProduct(id: number) {
    this.router.navigate(['/product-details', id]);
  }

  editProduct(id: number) {
    this.router.navigate(['/edit-product', id]);
  }

  deleteProduct(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
  if (confirmDelete) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts(); // Refresh the list
  }
  }
}

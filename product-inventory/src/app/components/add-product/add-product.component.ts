import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  addProductForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      manufacturer: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  addProduct() {
    if (this.addProductForm.valid) {
      this.productService.addProduct(this.addProductForm.value);
      alert('Product added successfully!');
      this.router.navigate(['/products']);
    }
  }
}

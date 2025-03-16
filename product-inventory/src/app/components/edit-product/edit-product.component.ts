import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

  export class EditProductComponent {
    editProductForm: FormGroup;
    productId!: number;
  
    constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private productService: ProductService,
      private router: Router
    ) {
      this.editProductForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        manufacturer: ['', Validators.required],
        price: ['', [Validators.required, Validators.min(1)]],
        quantity: ['', [Validators.required, Validators.min(1)]]
      });
    }
  
    ngOnInit() {
      this.productId = Number(this.route.snapshot.paramMap.get('id'));
      const product = this.productService.getProductById(this.productId);
      
      if (!product) {
        alert('Product not found');
        this.router.navigate(['/products']);
      } else {
        this.editProductForm.patchValue(product);
      }
    }
  
    updateProduct() {
      if (this.editProductForm.valid) {
        const updatedProduct = { ...this.editProductForm.value, id: this.productId };
        this.productService.updateProduct(updatedProduct);
        alert('Product updated successfully!');
        this.router.navigate(['/products']);
      }
    }
  }
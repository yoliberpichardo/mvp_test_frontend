import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../inteceptors/products.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDivider,
  ],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEdit = false;
  productId?: number;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.isEdit = !!this.productId;

    if (this.isEdit && this.productId) {
      this.isLoading = true;
      this.productsService.getProduct(this.productId).subscribe({
        next: (product) => {
          this.productForm.patchValue(product);
          this.isLoading = false;
        },
        error: () => {
          this.productsService.showError('Error al cargar producto');
          this.isLoading = false;
        },
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.isLoading = true;
      const productData: Product = this.productForm.value;

      const operation =
        this.isEdit && this.productId
          ? this.productsService.updateProduct(this.productId, productData)
          : this.productsService.createProduct(productData);

      operation.subscribe({
        next: () => {
          const message = this.isEdit
            ? 'Producto actualizado'
            : 'Producto creado';
          this.productsService.showSuccess(message);
          this.router.navigate(['/products']);
        },
        error: () => {
          this.productsService.showError('Error al guardar producto');
          this.isLoading = false;
        },
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../inteceptors/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEdit = false;
  productId?: number;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
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
        error: (error) => {
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
        error: (error) => {
          this.productsService.showError('Error al guardar producto');
          this.isLoading = false;
        },
      });
    }
  }
}

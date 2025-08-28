import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { AuthService } from '../../auth/auth.service';
import { ProductsService } from '../../inteceptors/products.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
  ],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isAdmin: boolean = false;
  isLoading = true;
  displayedColumns: string[] = ['name', 'category', 'price', 'stock'];

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    if (this.isAdmin) {
      this.displayedColumns.push('actions');
    }
    this.loadProducts();
  }

  createProduct() {
    this.router.navigate(['/products/new']);
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: () => {
        this.productsService.showError('Error al cargar productos');
        this.isLoading = false;
      },
    });
  }

  deleteProduct(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.productsService.deleteProduct(id).subscribe({
        next: () => {
          this.productsService.showSuccess('Producto eliminado correctamente');
          this.loadProducts();
        },
        error: () => {
          this.productsService.showError('Error al eliminar producto');
        },
      });
    }
  }

  editProduct(id: number): void {
    this.router.navigate(['/products/edit', id]);
  }
}

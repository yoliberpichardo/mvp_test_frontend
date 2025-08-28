import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { AuthService } from '../../auth/auth.service';
import { ProductsService } from '../../inteceptors/products.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [MatProgressSpinnerModule, MatDivider, MatIconModule],
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

  loadProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: (error) => {
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
        error: (error) => {
          this.productsService.showError('Error al eliminar producto');
        },
      });
    }
  }

  editProduct(id: number): void {
    this.router.navigate(['/products/edit', id]);
  }
}

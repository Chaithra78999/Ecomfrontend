import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product-model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ RouterModule, ProductComponent,CommonModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductComponent implements OnInit {
  // cartService: any;
  // router: any;
// addToCart(_t3: Product) {
// throw new Error('Method not implemented.');


// }
  products: Product[] = [];
product: any;

  constructor(private productService: ProductService,
    private router: Router,
    ) {}




  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: Product): void {
    // Add logic to add the product to the cart
    // For example, call a service method to add the product to the cart
    // this.cartService.addToCart(product);
    
    // Navigate to the cart page
    // this.router.navigate(['/cart']);
  // }
  // removecart(product:Product):void{
    // this.cartService.removeFromCart(product);{
      // this.router.navigate(['/cart']);
    }

  // }



  
  }
 
  
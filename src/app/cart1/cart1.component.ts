import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../products/product-model';
import { Cart1Service } from './cart1.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart1',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cart1.component.html',
  styleUrl: './cart1.component.css'
})
export class Cart1Component {

  products: Product[] = [];
  product: any;
  
    constructor(private cart1Service : Cart1Service,
      private router: Router,
      ) {}
  
      hello(productId : number) {
        this.router.navigate(['getById', productId])
        this.router.navigate(['/addcart'])
      }
      
  
  
    ngOnInit(): void {
      this.cart1Service.getProducts().subscribe(
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

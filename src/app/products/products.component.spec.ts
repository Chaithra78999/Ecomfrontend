import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-products',
  imports:[ProductsComponent,CommonModule],
  standalone:true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[] = [];

  constructor(private productService: ProductService) {}


  cartdetails(){

  }

  shwetha(){
    
  }

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

  addToCart(product: Product) {
    // Implement your logic for adding the product to the cart
  }
}

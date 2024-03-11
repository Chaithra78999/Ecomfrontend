import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './product-details.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  {
getCart() {
throw new Error('Method not implemented.');
}
   
ProductDel : any;
productId: any;

constructor (private productDetailsService : ProductDetailsService ,
  private router : Router,
  ) {
  
}

ngOnInit() : void {
  this. getProduct();
}

hello(productId : number) {
  this.router.navigate(['getById', productId])
  this.router.navigate(['/addcart'])
}

getProduct() {
  this.productDetailsService.getProductDetails().subscribe (
    res => {
      this.ProductDel = res
    }
  )
}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddcartService } from './addcart/addcart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcart',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './addcart.component.html',
  styleUrl: './addcart.component.css'
})
export class AddcartComponent  implements OnInit{

  productId : any;
  productDetails : any;

constructor(private router : Router,
  private route : ActivatedRoute,
  private addcartService : AddcartService){

}

ngOnInit(): void {
  this.productId = this.route.snapshot.params['productId'];
  this.addcartService.getvalue(this.productId).subscribe(Response=> {
   this.productDetails = Response ;
  console.log(this.productDetails);
  console.log(this.route.snapshot.params['productId']);
  
   }   )
  }
}



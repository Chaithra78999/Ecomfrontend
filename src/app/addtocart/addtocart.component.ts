import { Component } from '@angular/core';
import { Addtocart } from './addtocart';
import { HttpClient } from '@angular/common/http';
import { AddtocartService } from './addtocart.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  standalone: true,
  imports: [],
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css'
})
export class AddtocartComponent {

  productId : any; 
  productDel : any;

  productDetails : Addtocart[] | undefined;


  constructor ( private httpClient : HttpClient,
    private addtocartservice : AddtocartService,
    private route : ActivatedRoute){

  }


  ngOnInit() : void {
    this.productId = this.route.snapshot.params["productId"];
    this.addtocartservice.getsingleproduct(this.productId).subscribe(response => {
      this.productDel = response;
      console.log(this.productDel);
      console.log(this.route.snapshot.params["productId"]);
      
      
    })
  }



  onSelect(selectedItem : any) {
    console.log(selectedItem.name);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ApiService } from '../../service/api.service';
 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productlist : any ;

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit() {
    this.api.getProduct()
    .subscribe((res : any)=>{
      this.productlist = res;

      this.productlist.forEach((item : any)=> {
        Object.assign(item,{quantity:1,total:item.price});
      });
    })
  }
  addtocart(item : any){
    this.cartService.addToCart(item);
  }
}

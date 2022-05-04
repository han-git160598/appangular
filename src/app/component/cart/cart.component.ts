import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public CartList : any ;
  public grandTotal !: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.CartList = this.cartService.cartItemList;
    this.cartService.getProducts()
    .subscribe(res=>{
      this.CartList = res;
    })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);

  }
}

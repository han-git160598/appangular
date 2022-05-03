import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public CartList : any ;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.cartService.cartItemList);
    this.CartList = this.cartService.cartItemList;
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
}

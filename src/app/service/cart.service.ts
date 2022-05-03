import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts(){
    return this.productList.asObservable()
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  } 
  addToCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(){
    let grandTotal  = 0;
    this.cartItemList.map((item:any)=>{
      grandTotal +=item.total;
    })
  }
  removeCartItem(product:any){
    this.cartItemList.map((item:any, index : any )=>{
      if(product.id === item.id){
        this.cartItemList.splice(index,1);
      }
    });
  }

  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}

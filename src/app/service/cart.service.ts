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
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  } 
  addToCart(product : any){
    if(this.cartItemList.length !== 0 ){
      var index = this.cartItemList.map((item : any )=> item.id).indexOf(product.id) ;
      if(index !== -1)
      {
        this.cartItemList[index].quantity +=1;
        this.cartItemList[index].total *=2;
        this.productList.next(this.cartItemList);
        this.getTotalPrice();
      }else{
        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);
        this.getTotalPrice();
      }
    }else{
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }
   
  }

  getTotalPrice() : number{
    let grandTotal  = 0;
    if(this.cartItemList.length > 0){
      this.cartItemList.map((item:any)=>{
        grandTotal +=item.total;
      })
    }
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartItemList.map((item:any, index : any )=>{
      if(product.id === item.id){
        this.cartItemList.splice(index,1);
      }
    });
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}

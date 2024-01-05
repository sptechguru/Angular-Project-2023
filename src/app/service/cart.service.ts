import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { greet } from './../Basic componets/arrar &str/greet';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly apiBaseUrl = "https://fakestoreapi.com/products";

  public cartItemsList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public searchBar = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getProdcutList() {
    return this.productList.asObservable();
  }

  setProductsList(product: any) {
    this.cartItemsList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    this.cartItemsList.push(product);
    this.productList.next(this.cartItemsList);
    // this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandtotal = 0;
    this.cartItemsList.map((a: any) => {
      grandtotal += a.total;
    })
    return grandtotal;
  }

  removeCartItem(product: any) {
    this.cartItemsList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemsList.splice(index, 1);
      }
    })
  }

  removeAllCart() {
    this.cartItemsList = [];
    this.productList.next(this.cartItemsList);
  }


  getProdcuts() {
    return this.http.get(this.apiBaseUrl);
  }

  getProdcutDetails(id: any) {
    return this.http.get(this.apiBaseUrl + '/' + id);
  }

}

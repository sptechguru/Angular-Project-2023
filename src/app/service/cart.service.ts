import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  readonly url =  "https://fakestoreapi.com/products"

  constructor(private http:HttpClient) { }

  getProdcuts(){
   return this.http.get(this.url);
  }
}

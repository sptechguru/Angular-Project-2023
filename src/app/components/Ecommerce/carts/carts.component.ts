import { CartService } from './../../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  procutlist:any = [];

  constructor(private api:CartService) { }

  ngOnInit(): void {
    this.getProList();
  }

  getProList(){
    this.api.getProdcuts().subscribe((res:any)=>{
      console.log(res);
      this.procutlist = res;
      console.log(this.procutlist);

    })
  }

}

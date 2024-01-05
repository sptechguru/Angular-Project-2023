import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

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

import { CartService } from './../../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodcuts',
  templateUrl: './prodcuts.component.html',
  styleUrls: ['./prodcuts.component.css']
})
export class ProdcutsComponent implements OnInit {

  procutlist:any = [];
  serachKey : any = '';

  constructor(private api:CartService) { }

  ngOnInit(): void {
    this.getProList();
    this.api.searchBar.subscribe((res)=>{
      this.serachKey = res;
      console.log('search Prodcuts ', this.serachKey);
    })
  }

  getProList(){
    this.api.getProdcuts().subscribe((res:any)=>{
      console.log(res);
      this.procutlist = res;
      console.log(this.procutlist);
    }, error=>{
      console.log(error);
    })
  }


  addCart(item:any){
    this.api.addtoCart(item);
    // console.log('cart item of ', item);
  }

}

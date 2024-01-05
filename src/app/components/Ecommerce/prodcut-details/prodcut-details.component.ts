import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-prodcut-details',
  templateUrl: './prodcut-details.component.html',
  styleUrls: ['./prodcut-details.component.scss']
})
export class ProdcutDetailsComponent implements OnInit {

  procutlist:any = [];
  prodcutId:any = 0;
  constructor(private api:CartService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res:Params)=>{
      this.prodcutId = res.id;
      this.getProdcut();
    })
  }

  getProdcut(){
    this.api.getProdcutDetails(this.prodcutId).subscribe((res:any)=>{
      console.log(res);
      this.procutlist = res;
      console.log('prodcut_details......', this.procutlist);

    })
}



addCart(item:any){
  this.api.addtoCart(item);
  // console.log('cart item of ', item);
}

}

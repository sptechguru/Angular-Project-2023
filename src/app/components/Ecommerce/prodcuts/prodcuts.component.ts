import { CartService } from './../../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodcuts',
  templateUrl: './prodcuts.component.html',
  styleUrls: ['./prodcuts.component.css']
})
export class ProdcutsComponent implements OnInit {

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

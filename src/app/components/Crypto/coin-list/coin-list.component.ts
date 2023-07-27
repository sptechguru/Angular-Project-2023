import { Subscription } from 'rxjs';
import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { CryptoGraphyService } from 'src/app/service/crypto-graphy.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit, OnDestroy {

  public currency:string = "INR";
  public coinList:any = [];
  bannerData:any = [];
  public currencySub!:Subscription;
  public displayedColumns:string[] = ['image','symbol', 'name'  ,'current_price', 'price_change_percentage_24h', 'market_cap_rank'];
 
  constructor(private api:CryptoGraphyService, private route:Router) { }
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
      this.getCurencyList();
      this.api.gaterCurrency().subscribe((val)=>{
        // console.log(val)
        this.currency = val;
        this.getCurencyList();
        this.getBannerData();
      })
  }

  getBannerData() {
    this.api.getTrendingCurrency(this.currency)
      .subscribe(res => {
        // console.log(res);
        this.bannerData = res;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  coinDetails(data:any){
    // console.log(data.id);
    this.route.navigate(['coin-details',data.id]);
  }

  getCurencyList(){
    this.currencySub =  this.api.getCurrency(this.currency).subscribe((res:any)=>{
      // console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // this.coinList = res;
    },error =>{
      // console.log(error);
    })
  }

  ngOnDestroy(){
  this.currencySub.unsubscribe();
  }

  

}

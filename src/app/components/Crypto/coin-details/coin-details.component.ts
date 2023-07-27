
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { Subscription } from 'rxjs';
import {ChartConfiguration, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts'

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})
export class CoinDetailsComponent implements OnInit ,OnDestroy {

  public coinId!:string;
  public currency:string = "INR";
  public coinData:any;
  public days:number = 1;
  public coinDetailsSub!:Subscription;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: `Currency $`,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor: '#009688',
        pointHoverBackgroundColor: '#009688',
        pointHoverBorderColor: '#009688',

      }
    ],
    labels: []
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1
      }
    },

    plugins: {
      legend: { display: true },
    }
  };
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) myLineChart !: BaseChartDirective;

  constructor(private api:HttpService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.activeRoute.params.subscribe((res)=>{
      this.coinId = res['id'];
      // console.log(this.coinId);
     })

     this.api.gaterCurrency().subscribe((val)=>{
      // console.log(val)
      this.currency = val;
      this.getCoinList();
      this.getGraphData(this.days);
    })
     this.getCoinList();
  }

  getCoinList(){
  this.coinDetailsSub = this.api.getCurrencyById(this.coinId).subscribe((res)=>{
      // console.log(res);
      this.coinData = res;
      this.getGraphData(this.days);
    },error=>{
      // console.log(error);
    })
  }


  getGraphData(data:any){
    // console.log(data);
    this.days = data;
    this.coinDetailsSub = this.api.getGrpahicalCurrencyData(this.coinId,this.currency,this.days)
    .subscribe((res)=>{
      console.log('Graph',res);
      setTimeout(() => {
        this.myLineChart.chart?.update();
      }, 200);

      this.lineChartData.datasets[0].data = res.prices.map((a:any)=>{
        return a[1];
      })
      this.lineChartData.labels = res.prices.map((a:any)=>{
        let date = new Date(a[0]);
        let time = date.getHours() > 12 ?
        `${date.getHours() - 12}: ${date.getMinutes()} PM` :
        `${date.getHours()}: ${date.getMinutes()} AM`
        return this.days === 1 ? time : date.toLocaleDateString();
      })

    },error=>{
      console.log(error);
    })
  }



  ngOnDestroy(){
    this.coinDetailsSub.unsubscribe();
  }

}

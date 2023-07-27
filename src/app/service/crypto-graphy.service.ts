import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoGraphyService {

 readonly apiurl = " ";

  constructor(private http:HttpClient) { }

  // now using Behaviour subject 
  private selectedCurrency$ : BehaviorSubject<string> = new BehaviorSubject<string>("INR");

  gaterCurrency(){
    return this.selectedCurrency$.asObservable();
  }

  seterCurrency(currency : string){
    this.selectedCurrency$.next(currency);
  }

  getCurrency(currency:string):Observable<any>{
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }
  getTrendingCurrency(currency:string):Observable<any>{
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
  }
  getGrpahicalCurrencyData(coinId:string, currency:string, days: number):Observable<any>{
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`);
  }
  getCurrencyById(coinId:string):Observable<any>{
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  }


  getMethod():Observable<any>{
    return this.http.get(this.apiurl);
  }


  postMethod(body:any):Observable<any>{
    return this.http.post(this.apiurl ,body);
  }


  errorHadling(){
    alert("error");
  }

  
}

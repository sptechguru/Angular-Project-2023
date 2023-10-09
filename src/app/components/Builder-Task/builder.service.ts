import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  constructor(private http:HttpClient) { }

  readonly ApiBaseUrl:any = "https://cms.bettorlogic.com/api/BetBuilder/";


  getFixture(data:any):Observable<any>{
    return this.http.get<any>(`${this.ApiBaseUrl}GetFixtures?sports=${data}`);
  }


  getSelection(item:any):Observable<any>{
    return this.http.get<any>(`${this.ApiBaseUrl}GetSelections?sports=${item}`);
  }


  getMarkets(item:any):Observable<any>{
    return this.http.get<any>(`${this.ApiBaseUrl}GetMarkets?sports=${item}`);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  data:any;

  setdata(val:any){
    this.data = val
  }

  getData(){
    return this.data;
  }

}

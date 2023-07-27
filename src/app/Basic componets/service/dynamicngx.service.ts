import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicngxService {

  constructor() { }

  print(val:any, containerId:any){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
}

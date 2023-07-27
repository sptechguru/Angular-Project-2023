import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private http:HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users/'

  // url = 'http://dummy.restapiexample.com/api/v1/employees'

  // url = "https://api.covid19india.org/data.json"
  
  
  prodcut(): Observable<any>{
  return this.http.get(this.url)

  }

  getData(){
    return new Observable(obs=>{
      obs.next({result: 'success'});
      obs.complete();
    })
  }


}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public url = "https://jsonplaceholder.typicode.com/users/";

  getMethod(){
    const  headers1 =  new HttpHeaders({
      "content-type":"content-type-json",
      'authetication-key':"124893api",
    });
    const params1 =  new HttpParams()
    .set('pageNum','10')
    .set('pageSize','110')

    return this.http.get(this.url,{headers:headers1 ,params:params1});
  }


// //////////////////////////////////////////////////////postMethod/////////////////////////////////////////////////////////


  postMethod(body:any){
    const  customheders =  new HttpHeaders({
      "content-type":"content-type-json",
      'authetication-key':"124893api",
    });

    const params1 =  new HttpParams()
    .set('userRole','admin')
    .set('permission','denied')
    return this.http.post(this.url, body, {headers:customheders ,params:params1});
  }

// /////////////////////////////////////////////////////putMethod//////////////////////////////////////////////////////////

  putMethod(){
    const  customheders =  new HttpHeaders({
      "content-type":"content-type-json",
      'authetication-key':"124893api",
      'userid':'12344'
    });

    const putparams =  new HttpParams()
    .set('userRole','admin')
    .set('permission','denied');

    const putBody = {
      name:"santosh pal",
      id:1222,
      email:"santoshpal@gmail.com"
    }

    return this.http.put(this.url, {headers:customheders ,params:putparams,body:putBody});
  }


  // /////////////////////////////////////////////////////patchMethod//////////////////////////////////////////////////////////

  patchMethod(body:any){
    const  customheders =  new HttpHeaders({
      "content-type":"content-type-json",
      'authetication-key':"124893api",
      'userid':'12344'
    });

    const putparams =  new HttpParams()
    .set('userRole','admin')
    .set('permission','denied');

    const putBody = {
      name:"santosh pal",
      id:1222,
      email:"santoshpal@gmail.com"
    }
    return this.http.patch(this.url, {headers:customheders ,params:putparams,body:putBody});
  }


  // //////////////////////////////////////////////deleteMethod/////////////////////////////////////////////////////////////////


  deleteMethod(id:any){
    const  customheders =  new HttpHeaders({
      "content-type":"content-type-json",
      'deltion-key':"1244",
    });

    const params1 =  new HttpParams()
    .set('userRole','admin')
    .set('permission','denied')

    return this.http.delete(this.url + id, {headers:customheders ,params:params1});
  }



}

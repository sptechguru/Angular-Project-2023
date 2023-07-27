import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../Models/Employess';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageJsonServerService {

  readonly apiUrl = "http://localhost:3000/employee";

  headers = new HttpHeaders().set("content-Type","application-json");

  constructor(private http:HttpClient) { }


  getMethod(): Observable<Employee>{
    return this.http.get<Employee>(this.apiUrl);
  }

  deleteMethod(id:any): Observable<Employee>{
    return this.http.delete<Employee>(this.apiUrl +'/'+id).pipe(
      catchError(this.errorHandling) 
    )
  }

  getUpdateByid(id:any): Observable<Employee>{
    return this.http.get<Employee>(this.apiUrl+'/'+id).pipe(
       catchError(this.errorHandling) )
  }

  createMethod(body:any): Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl,body) .pipe(
      catchError(this.errorHandling)
    )
  }

  updateMethod(id:any,body:any): Observable<Employee>{
    return this.http.put<Employee>(this.apiUrl+'/'+id, body).pipe(
      catchError(this.errorHandling)
    )
  }


  errorHandling(error:HttpErrorResponse){

    if(error.error instanceof ErrorEvent){
      console.error(`An Error Occured ${error.error.message}`)
    }
    else{
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}

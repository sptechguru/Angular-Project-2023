import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) { }

  // that is Normal Subject
// userName = new Subject<any>();

// Age = new Subject<any>();


// Behavioursubject now using

userName = new BehaviorSubject('santosh')
}

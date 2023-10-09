import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {


  private userDetailsBus = new BehaviorSubject<any>([]);
  userDetails = this.userDetailsBus.asObservable();
  constructor() {}

  setLoginDetails(userDetails: any) {
    this.userDetailsBus.next(userDetails);
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuards implements CanActivate {

  constructor(private router:Router,public api:AuthService){

  }
  canActivate(): boolean {
    
  if(this.api.isLoggedIn()){
      // console.log("your login succefully..");
      return true
    }
    this.router.navigate(['login']);
    // this.tost.success("You are not Login..");
    // Swal.fire('Oops...', 'You are not Login ..', 'error')
    return false
}

}

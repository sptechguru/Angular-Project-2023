import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myform!: FormGroup;
  submitted: boolean = false;
  userSingupList:any = [];

    constructor( private api: AuthService , public route:Router) {
    	this.myform = new FormGroup({
        firstName: new FormControl(	'',	[Validators.required]),
        lastName: new FormControl(  '',  [Validators.required]),
        gender: new FormControl(  '',  [Validators.required]),
        phone_Number:new FormControl(  '',  [Validators.required]),
        email: new FormControl(  '',  [Validators.required, Validators.pattern('^.+@.+\..+$')]),
        password: new FormControl(  '',  [Validators.required]),
        confirm_password: new FormControl(  '',  [Validators.required]),

      });
  	}

    ngOnInit(): void {
    }

  get f(): { [key: string]: AbstractControl } {
    return this.myform.controls;
  }


onSubmit (): void  {
  this.submitted = true;
  console.log(this.myform.value);
  let data = this.myform.value;
  let postobj = {
  email: data.email,
  firstName: data.firstName,
  lastName: data.lastName,
  password: data.password,
  confirm_password:data.confirm_password,
  gender: data.gender,
  phone_Number:data.phone_Number
  }
  console.log(this.myform.value);


// local storage login fuctionlity
  const userData = localStorage.getItem("signupData");
  if(userData == null){
    this.userSingupList.push(data)
    localStorage.setItem("signup", JSON.stringify(this.userSingupList));
    Swal.fire('Oops...', 'Your Registation Succefully', 'success')
    this.myform.reset();
    this.route.navigate(['/login']);
  }

  //   if (this.myform.valid) {
  //     this.api.postMethod('signup',postobj).subscribe((res)=>{
  //       console.log(res);
  //       this.myform.reset();
  //       // this.tost.success("Your Signup is successfully");
  //       Swal.fire('Oops...', res.message, 'success')
  //       setTimeout(() =>{
  //         this.route.navigate(['login']);
  //       },4000)
  //     },error =>{
  //       Swal.fire('Oops...',error, 'error')
  //     } )
	// }


}


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  loginform!: FormGroup;
  submitted: boolean = false;
  userDetails: any;

  constructor(private api: AuthService, public route: Router) {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^.+@.+\..+$')]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() { return this.loginform.controls; };

  loginMethod() {
    this.submitted = true;
    //  console.log(this.loginform.value);
    let data = this.loginform.value;
    if (this.loginform.valid) {
      this.api.postMethod('login', data).subscribe((res) => {
        console.log(res.message);
        // localStorage.setItem('userToken',res.body.token);
        // console.log(res.body.email);
        //  localStorage.setItem('Email',res.body.email);
        if (res.message) {
          // this.tost.success("Your Login issuccessfully");
          Swal.fire('Oops...', res.message, 'success')
          setTimeout(() => {
            this.route.navigate(['/dashbords']);
          }, 3000)
        }
        else {
          // Swal.fire('Oops...', 'invalid user name & password!', 'error')
          // this.tost.error('invalid user name & password!');
          // this.loginform.reset();
        }
      }, error => {
        console.log("server error ", error);
        // this.tost.warning(error);

      })
    }

  }


  ngOnInit(): void {
    let userData: any = localStorage.getItem("signup");
    this.userDetails = JSON.parse(userData);
    console.log('login Data', this.userDetails);

  }

  localLoginMethod() {
    let data = this.loginform.value;
    const userExist = this.userDetails;
    if (userExist != undefined) {
      this.userDetails.find((item: any) => {
        if (item.email == data.email && item.password == data.password) {
          Swal.fire('Oops...', 'Login Succesfully', 'success')
          this.route.navigate(['/pages/home']);
          // window.location.reload();
        }
        else {
          Swal.fire('Oops...', 'Invalid Credentials', 'error')
        }
      })
    }
    else {
      Swal.fire('Oops...', 'User Not Fond & Please Create a New Accounts ??', 'error')
    }

  }




}



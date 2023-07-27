import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  logincf(){
    console.log("Your Login Succefully.........");
  }


  constructor() { }


  ngOnInit(): void {
  }

  loginform = new FormGroup({

    lemail: new FormControl('' ,Validators.required),
    lpassword: new FormControl('' ,Validators.required)

  });

  metod(eve:any){
    console.log(eve);
    

  }


}

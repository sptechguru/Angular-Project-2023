import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

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

}

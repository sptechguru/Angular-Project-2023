import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { validateVerticalPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})



export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // that is form group

  showForm = true;

  spform = new FormGroup({

    fname: new FormControl('',Validators.required),
    lname: new FormControl('' ,Validators.required),
    email: new FormControl('' ,Validators.required),
    password: new FormControl('' ,Validators.required),
    password2: new FormControl('' ,Validators.required)

  });

  sp(){
    this.showForm = false;
    // document.write(` user name is :${this.spform.value.username} .<br/> Password is : ${this.spform.value.password} `);

    // alert("data store");
  }

  goBack(){
    this.showForm=true;
  }

  // get pairs() {
  //   return (<FormArray>this.myForm.get('pairs'));
  // }

  reset() {
    this.spform.reset();
  }

  // get username(){
  //   return this.spform.get('username');
  // }


}

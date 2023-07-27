import { ParentService } from './../../parent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']

})
export class Child1Component implements OnInit {

  constructor(private pservice:ParentService) {

   this.pservice.userName.subscribe(uname => {
     this.userName = uname
   })

   }

  ival:any;
  ival2:any;

  ngOnInit(): void {

  }

  // Normal Subject
  // userName:string = ""
  // Age:string =""


  // behavaioursubject
  userName:any;

  updateUserName(uname:any){

  // Normal Subject
    // this.userName = uname.value

    this.pservice.userName.next(uname.value)
    // this.pservice.Age.next(uname.Age)

  }

}

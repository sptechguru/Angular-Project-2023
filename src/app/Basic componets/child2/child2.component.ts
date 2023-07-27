import { ParentService } from './../../parent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  constructor(private pservice:ParentService) {
    this.pservice.userName.subscribe(uname => {
      this.userName = uname
    })
    }

  result:any;
  userName:any;

  ngOnInit(): void {

      // this.result = this.service.getData()
  }

  updateUserName(uname:any){

    // this.userName = uname.value

    this.pservice.userName.next(uname.value)

  }
}




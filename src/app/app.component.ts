
import {Component,OnInit} from '@angular/core';
import { AuthLoginService } from './service/auth-login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  title = 'test-app';
  isAuth:boolean = false;
  userDetails:any;

  constructor(private login:AuthLoginService) { }


  ngOnInit(): void {
    this.login.userDetails.subscribe((res)=>{
      console.log('appp Signup.......',res);
    let userData: any = localStorage.getItem("signup");
    this.userDetails = JSON.parse(userData);
    console.log('login Data', this.userDetails);
    if(userData){
      this.isAuth = true;
    }
    })

}

}




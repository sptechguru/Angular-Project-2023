
import {Component,OnInit} from '@angular/core';
import { AuthLoginService } from './service/auth-login.service';
import { CrudService } from './crud.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  title = 'test-app';
  isAuth:boolean = false;
  userDetails:any;
  data:any = "xyz"
  pageNumber:any = 1;

  constructor(private login:AuthLoginService , private api: CrudService) { }


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

    this.getData();
}

getData(){
  this.api.getDataList(this.pageNumber).subscribe((res)=>{
    console.log(res);
    this.data = res;
    console.log("parent componets called",this.data);
  }, error=>{
    console.log("error Api failed", error);
  })
}
}




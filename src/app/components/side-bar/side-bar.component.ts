import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/service/auth-login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  userDetails:any;
  constructor(private Login:AuthLoginService) { }

  ngOnInit(): void {
    this.Login.userDetails.subscribe((res)=>{
      console.log('sidebar Signup.......',res);
    let userData: any = localStorage.getItem("signup");
    this.userDetails = JSON.parse(userData);
    console.log('user details', this.userDetails);
    })
  }

  logout(){
    alert('logout Method Callled');
    localStorage.removeItem('signup');
    localStorage.clear();
    window.location.reload();
  }

}

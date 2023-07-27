import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  userDetails:any;
  constructor() { }

  ngOnInit(): void {
    let userData: any = localStorage.getItem("signup");
    this.userDetails = JSON.parse(userData);
    console.log('user details', this.userDetails);
  }

  logout(){
    alert('logout Method Callled');
    localStorage.removeItem('signup');
    localStorage.clear();
    window.location.reload();
  }

}

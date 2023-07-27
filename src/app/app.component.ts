
import {Component,OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  title = 'test-app';
  isAuth:boolean = true;

  constructor() { }

  ngOnInit(): void {
    let userData: any = localStorage.getItem("signup");
    if(userData){
      this.isAuth = true;
    }
  }

}




import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parentinfo',
  templateUrl: './parentinfo.component.html',
  styleUrls: ['./parentinfo.component.scss']
})
export class ParentinfoComponent implements OnInit {

  // message: string;
  constructor() { }

  ngOnInit() {
    // alert(this.message);
    // swal(this.message, "You clicked parent Components!", "success");
  }

}

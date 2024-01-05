import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() hero:any = [];
  dataList:any = [];
  ngOnInit(): void {
    this.dataList = this.hero;
    console.log(this.hero, 'child data here ');
    console.log(this.dataList, 'child 2 data here ');

  }

}

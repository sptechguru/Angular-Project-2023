import { Component, OnInit } from '@angular/core';
import { BuilderService } from '../builder.service';

@Component({
  selector: 'app-builder-selector',
  templateUrl: './builder-selector.component.html',
  styleUrls: ['./builder-selector.component.scss']
})
export class BuilderSelectorComponent implements OnInit {

  constructor(private bulderApi: BuilderService) { }

  builderList: any = [];
  selectionList: any = [];
  marketList: any = [];
  marketNumber: number = 1;
  mixtureNumber: number = 1;
  selectionNumber: number = 1;



  ngOnInit(): void {
    this.getFixture();
    this.getSelection();
    this.getBuiderMarket();
  }

  getFixture() {
    this.bulderApi.getFixture(this.mixtureNumber).subscribe((res) => {
      this.builderList = res;
      console.log('Fixtures data........', this.builderList);
    }, error => {
      console.log(error);
    })
  }


  getSelection() {
    this.bulderApi.getSelection(this.selectionNumber).subscribe((res) => {
      this.selectionList = res;
      console.log('selection data.......', this.selectionList);
    }, error => {
      console.log(error);
    })
  }

  selectionChange(item:any){
    this.marketNumber = item;
    console.log('selectNumber', this.marketNumber)
    this.getBuiderMarket();
  }

  
  legsChange(item:any){
    this.marketNumber = item;
    console.log('legs', this.marketNumber)
    this.getBuiderMarket();
  }


  getBuiderMarket() {
    this.bulderApi.getMarkets(this.marketNumber).subscribe((res) => {
      this.marketList = res;
      console.log('marketList data.......', this.marketList);
    }, error => {
      console.log(error);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { BuilderService } from '../builder.service';

@Component({
  selector: 'app-builder-features',
  templateUrl: './builder-features.component.html',
  styleUrls: ['./builder-features.component.scss']
})
export class BuilderFeaturesComponent implements OnInit {

  constructor(private bulderApi:BuilderService) { }

  fixturesList:any;
  fixNumber:number =1

  ngOnInit(): void {
    this.getFixture();
  }

  getFixture(){
    this.bulderApi.getFixture(this.fixNumber).subscribe((res)=>{
      this.fixturesList = res;
      console.log('features',this.fixturesList);
    }, error=>{
      console.log(error);
    })
  }
}

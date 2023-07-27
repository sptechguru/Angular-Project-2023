import { AfterContentInit, Component,  DoCheck,  OnChanges, OnInit,
  SimpleChanges ,AfterViewChecked, Input} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit ,OnChanges
,DoCheck , AfterContentInit ,AfterViewChecked{

  // Angular Hooks Concept method Execute Step By Step

  name = ""
  emp:any;

//  that is child components is Home
  @Input() hero:any;

constructor() {
    // First time Executing constructor Default calling
    // alert("Constructor is called..");
    console.log("Constructor is called First  time before render in dom..");
     }

    //  That is hooks life cycle of Angular

ngOnInit(): void {
  // alert("NgOnInit is called..");
  console.log("NgOnInit is called..");
}

ngOnChanges(changes:SimpleChanges){
  // console.log(" Ng on  changes  is called..");
  console.log(changes);
  console.log(` Only changes Method . ${changes}. & Value ${changes.myValue.currentValue}`);
  // alert(` Only changes Method . ${changes}. & Value ${changes.myValue.currentValue}`);

}


ngDoCheck() {
  // alert("NgDocheck is called..");
  console.log("NgDocheck is called..");

}

ngAfterContentInit(){
  // alert(".........ngAfterContentInit is called......");
  console.log(".........ngAfterContentInit is called......");

}

ngAfterContentChecked(){
  console.log("ngAfterContentChecked is called......");
  // alert("ngAfterContentChecked is called......");

}

ngAfterViewInit(){
  // alert(" ngAfterViewInit is called......");
  console.log(" ngAfterViewInit is called......");


}

ngAfterViewChecked(){
  console.log(" ngAfterViewChecked is called......");
}

ngDestroy(){
  console.log('NgDestroy is callled ..');
}


}

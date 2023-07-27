import { ChildinfoComponent } from './../childinfo/childinfo.component';
import { ParentinfoComponent } from './../parentinfo/parentinfo.component';
import { GoodbyeComponent } from './../goodbye/goodbye.component';
import { HelloComponent } from './../hello/hello.component';
import { HicomponentComponent } from './../hicomponent/hicomponent.component';


import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
   OnInit
} from '@angular/core';

@Component({
  selector: 'app-dyncompo',
  templateUrl: './dyncompo.component.html',
  styleUrls: ['./dyncompo.component.scss']
})
export class DyncompoComponent implements OnInit {


  say:any;

  ngOnInit(): void {
    this.say = HicomponentComponent;
  }

  sayHi(){
    this.say = HicomponentComponent;
  }

  sayHello(){
    this.say = HelloComponent;
  }

  sayGoodBye(){
    this.say = GoodbyeComponent;
  }



}

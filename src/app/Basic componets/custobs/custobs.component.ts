import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicngxService } from '../service/dynamicngx.service';

@Component({
  selector: 'app-custobs',
  templateUrl: './custobs.component.html',
  styleUrls: ['./custobs.component.scss']
})
export class CustobsComponent implements OnInit ,OnDestroy{

  subs2: Subscription = new Subscription;
  techstatus2:any;

  techstatus:any;

  constructor(private dynamic:DynamicngxService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

    let cusobs1 = Observable.create((observer: { next: (arg0: string) => void; complete: (arg0: string) => void; }) =>{

     setInterval(() =>{
      observer.next('Angular');
    },2000)

    setInterval(() =>{
      observer.next('Html 5');
      // observer.complete('Data has been completed 1');
    }, 3000)

    setInterval(() =>{
      observer.next('Typescript');
      // observer.complete('Data has been completed 1');
    }, 4000)

    setInterval(() =>{
      observer.next('css 3');
      observer.complete('Data has been completed 1');
    }, 5000)


    });

  //that is subscribe here obeserble   subscribe (1st arguments data , error , completed)
    cusobs1.subscribe((res: any) =>{
      // console.log(res);
      this.dynamic.print(res,'elcontainer')
    },
    (error:any) =>{
      this.techstatus = 'error';
    },
    ()=> {
      this.techstatus = 'completed';
    }
    )

    // ///////////////Example  2 for custom logic//////////////////////////////////
   let arr = ['javascript','Angular','Node','Expressjs','Python','Django'];
    const cusobs2 = Observable.create((observer: { next: (arg0: string) => void; error: (arg0: string) => void; complete: (arg0: string) => void; }) =>{
      let count = 0;
      setInterval(()=>{
        observer.next(arr[count]);
        if(count >= 5){
          observer.error('Error Occurs in emit....');
        }
        if(count >= 5){
          observer.complete('all completed..');
        }
        count++;
      },1000)

    })

   //that is subscribe here obeserble  subscribe (1st arguments data , error , completed)
   this.subs2 = cusobs2.subscribe((data: any)=>{
      console.log(data)
      this.dynamic.print(data,'elcontainer2')
    },
    (error:any) =>{
      this.techstatus2 = 'error';
    },
    ()=> {
      this.techstatus2 = 'completed';
    }
 )

}

  OnDestroy(){
    this.subs2.unsubscribe();
  }


}





import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  myform!:FormGroup;
  mylist:any =[];


  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.myform = this.fb.group({
      t1:[''],
      t2:[''],
      t3:[''],
      t4:[''],
      t5:['']
    })
  }

  onSubmit(){
    let guessWorld = "world"
    let data = this.myform.value;
    var found = Object.keys(data).filter(function(key) {
      return data[key] === guessWorld;
    });
    
    if (found.length) {
       alert('exists');
    }


}



  }



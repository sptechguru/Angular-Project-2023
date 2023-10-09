import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  constructor() { }

  ticketArray: any = [
    {
      ticket_id: 'jira -121',
      ticketName: 'jira -121',
      status: 'To Do'
    },

    {
      ticket_id: 'jira -122',
      ticketName: 'jira -122',
      status: 'In Progress'
    },

    {
      ticket_id: 'jira -123',
      ticketName: 'jira -123',
      status: 'Done'
    },

  ];

  ngOnInit(): void {
    this.filterStatus('To Do');
  }

  filterStatus(status: any) {
    console.log('status Gallery..........',status);
    var statusData:any = this.ticketArray.filter((item:any) => {
      if (item.status === status) {
        return statusData;
      }
    })
  }



}







const table = new Observable(two);

table.subscribe({
  next(num) {
    console.log(num);
    // alert(num);

  },

  complete() {
    console.log("Finally Sequece Completd");
    // alert("Finally Sequece Completd");

  }

});


function two(observer: any) {

  for (var i = 1; i <= 10; i++) {
    observer.next('2 * ' + i + ' = ' + i * 2);
  }

  observer.complete();
  return {
    unsubscribe() {
      console.log("unsubribe method is called");

    }
  };


}

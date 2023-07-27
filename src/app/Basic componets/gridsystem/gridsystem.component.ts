import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridsystem',
  templateUrl: './gridsystem.component.html',
  styleUrls: ['./gridsystem.component.scss']
})
export class GridsystemComponent implements OnInit {

  gridApi:any;
  columnApi:any;

  columnDefs = [
    { field: 'name', sortable: true, filter: true  },
    { field: 'email' , sortable: true, filter: true },
    { field: 'mobile', sortable: true, filter: true  },
    { field: 'gender' , sortable: true, filter: true },
    { field: 'state' , sortable: true, filter: true },

];

rowData = [
    { name: 'sani', email: 'sani@gmail.com ', mobile: +914445435000 ,gender:'male' ,state:"m.p" },
    { name: 'mohit', email: 'Mondeo@gmail.com', mobile: +9144454350004 ,gender:'Female',state:"u.p"} ,
    { name: 'Raj', email: 'MBoxter@gmail.com', mobile: 914445435063 ,gender:'male',state:"Delhi"},
];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  OngridReaddy(params:any){
    this.gridApi = params.api;
    this.columnApi = params.columnApi;

  }

updateRow(){
    var rowNode = this.gridApi.getRowNode(2);
    rowNode.setData({
      "name":"ravi",
      "email": 'ravi@gmail.com ',
      "mobile":9424876695,
      "gender":"male",
      "state":"Banglore"
    })
    alert("updateRow.... ..");
  }

  updatecell(){
    var rowNode = this.gridApi.getRowNode(2);
    rowNode.setDataValue("mobile",9415961219)
    alert("updatecell ..");
  }

  UpdateAllRow(){

    this.http.get("../assets/data.json").subscribe(data=>{
      this.gridApi.setRowData([]);
      var newData = data;
      this.gridApi.updateRowData({add:newData});
    })
    alert("UpdateAllRow ..");
  }


  clear(){
    this.gridApi.setRowData([]);
    alert("Clear All data..");
  }

}

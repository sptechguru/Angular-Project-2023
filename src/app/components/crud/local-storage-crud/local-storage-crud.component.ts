import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageJsonServerService } from 'src/app/service/local-storage-json-server.service';

@Component({
  selector: 'app-local-storage-crud',
  templateUrl: './local-storage-crud.component.html',
  styleUrls: ['./local-storage-crud.component.scss']
})
export class LocalStorageCrudComponent implements OnInit {

  
  public empList: any = [];
  public empForm!: FormGroup;
  public btnshow:boolean = true;
  public userId:any;
  employeesToDisplay:any;

  constructor(public api: LocalStorageJsonServerService,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.intiForm();
    this.getEmp_list();
  }

  intiForm() {
    this.empForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      experience: ['', Validators.required],
      postions: ['', Validators.required],
      salary: ['', Validators.required]
    })
  }

  getEmp_list() {
    this.api.getMethod().subscribe((res) => {
      this.empList = res;
      console.log(this.empList);
    }, error => {
      console.log(error);
    })
  }

  editTodo(data: any) {
   console.log(data);
   alert("edit");
   this.userId = data.id;
   this.empForm.patchValue({
    id:data.id,
    firstname: data.firstname,
    lastname: data.lastname,
    email:data.email,
    dob: data.dob,
    experience: data.experience,
    postions: data.postions,
    salary: data.salary
   })
   this.btnshow = false;
  }

  updateEmpL(){
    alert("update");
    let apibody = this.empForm.value;
    console.log(apibody.id);
    this.api.updateMethod(this.userId,apibody).subscribe((res)=>{
     console.log('update data .',res);
     this.getEmp_list();
    this.btnshow = true;
    this.empForm.reset();
    },error =>{
     console.log(error);
    })
  }

  deleteTodo(id: any) {
    this.api.deleteMethod(id).subscribe((res => {
      console.log(res);
      this.getEmp_list();
    }), error => {
      console.log(error);
   })

}
}

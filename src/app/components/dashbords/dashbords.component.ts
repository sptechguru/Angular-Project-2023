import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashbords',
  templateUrl: './dashbords.component.html',
  styleUrls: ['./dashbords.component.scss']
})
export class DashbordsComponent implements OnInit {

  constructor(public route: Router, public api: AuthService) { }

  profile: any = [];
  p: number = 1;
  id: any;
  editform!: FormGroup;
  submitted: boolean = false;
  editPostModal: any;
  modelHide:boolean = false;
  searchTerm!: string;
  searchPost?: any;
  posts:any;

  ngOnInit(): void {
    this.getuserlist();
    this.editform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^.+@.+\..+$')]),
      username: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl(''),
    });
  }


  editModal(editPost: any) {
    console.log(editPost.id);
    this.editPostModal = editPost;
    console.log('edit modal');
    this.modelHide = true;
  }

  updateMethod(){
    let data = this.editform.value;
    let parms = {
     email:data.email,
     username:data.username,
     first_name:data.first_name,
     last_name:data.last_name,
    }
     this.api.postMethod('updateUser',parms).subscribe((data)=>{
       console.log(data);
       this.modelHide = false;
       this.getuserlist();

      // this.route.navigate(['dashbords']);
     })
   }

   search(post: string): void {
    this.posts = this.searchPost.filter((val: any) =>
      val.title.toLowerCase().includes(post)
    );
    console.log(post);
  }



  getuserlist() {
    let userData: any = localStorage.getItem("signup");
    this.profile = JSON.parse(userData);
    console.log('login Data', this.profile);
    // this.api.getDashbords().subscribe((res) => {
    //   console.log(res);
    //   this.profile = res;
    // });
  }

  deleteUser(val: any) {
    console.log("id",val)
    if (confirm("Are you sure to delete this User ." + val)) {
      let postobj = {
        user_id: val
      }

      // Local storage data delete user Data;


      this.api.postMethod('deleteUser', postobj).subscribe((data) => {
        console.log(data);
        this.getuserlist();
      })
    }
  }


  logoutMethod() {
    localStorage.removeItem('userToken');
    this.route.navigate(['login']);
  }

}

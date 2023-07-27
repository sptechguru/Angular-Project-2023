import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: any;
  submitted = false;
  success = true;

  contactf(){
    alert("your data has been Succesfully...");

  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }



  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    this.success = true;
}


// old Withought Validation code

  // cform = new FormGroup({
  //   cname: new FormControl('',Validators.required),
  //   cemail: new FormControl('' ,Validators.required),
  //   cphone: new FormControl('' ,Validators.required),
  //   cmsg: new FormControl('' ,Validators.required)

  // });

}

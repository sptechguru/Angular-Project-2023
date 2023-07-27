import { TestappService } from './../../testapp.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, VERSION , Input, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[TestappService]

})

export class HomeComponent implements OnInit {

  title = 'QRCODES';
  // name = 'Santosh Pal' + VERSION.major;
  // elementType = NgxQrcodeElementTypes.URL;
  // correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  // value = 'https://sani.pythonanywhere.com/';


  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://sani.pythonanywhere.com/';



  // that is parents ts file

  data = {
    name:'Rajesh',
    age:25
  }

// that is TestappService varables
  emp:any;


  title2 ="Test App Service";
  public inputValue : string;
  constructor(private testappservice:TestappService) {
    this.inputValue = " ";
  }


  ngOnInit():void {
   this.emp = this.testappservice.employee;

  }


}





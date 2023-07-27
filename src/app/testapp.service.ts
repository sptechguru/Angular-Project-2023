import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestappService {

  employee:any[];

  constructor()
  {

    this.employee = [
      {
        id:'101',name:'santosh', post:"ui Developer"
      },

      {
        id:'102',name:'sani', post:"java Developer"
      },

      {
        id:'103',name:'Raj ', post:" Django Developer"
      },

      {
        id:'104',name:'Amit ', post:" Python Developer"
      },

    ];

   }

  }


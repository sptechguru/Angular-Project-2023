import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor() { }

  datamovies = [

    {
      name:'santosh', title:"ui Developer"
    },

  ];

}

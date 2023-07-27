import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  constructor() { }

  dataimg = [


    {title:"Html ",subtittle:"version Html5"
    , url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
     contnent:"At its heart, HTML is a fairly simple language made up of elements, which can be applied to pieces of text to give them different meaning in a document (Is it a paragraph? Is it a bulleted list? Is it part of a table?), structure a document into logical sections (Does it have a header? Three columns of content? A navigation menu?), and embed content such as images and videos into a page. This module will introduce the first two of these and introduce fundamental concepts and syntax you need to know to understand HTML."
   },

   {title:"Sass",subtittle:"version css3"
   , contnent:"CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.",
   url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png"},


   { title:"JavaScript",subtittle:"version Es6" ,
   contnent:"JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
   url:"https://static.javatpoint.com/images/javascript/javascript_logo.png"
  },

  {title:"Type Script",subtittle:"version",
  url:"https://serokell.io/files/0u/0ufu1q21.js-ts.jpg" ,
   contnent:"TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system For example, JavaScript provides language primitives like string, number, and object, but it doesn’t check that you’ve consistently assigned these. TypeScript does."},



    { title:"Angular",subtittle:"version" ,
     contnent:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.",
     url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
    },


     {title:"Angular Material",subtittle:"version"
      , url:"https://kenoleon.github.io/Front-End-Web-Dev-UI-UX/assets/images/AngularMaterial.jpg",
       contnent:"Angular Material is a UI component library for Angular JS developers. Angular Material components help in constructing attractive, consistent, and functional web pages and web applications while adhering to modern web design principles like browser portability, device independence, and graceful degradation."
      },


  ];




  ngOnInit(): void {
  }



}







const table = new Observable(two);

table.subscribe({
  next(num){
    console.log(num);
    // alert(num);

  },

  complete(){
    console.log("Finally Sequece Completd");
    // alert("Finally Sequece Completd");

  }

});


function two(observer:any){

  for(var i = 1; i <= 10; i++) {
    observer.next('2 * ' + i + ' = ' + i*2);
  }

  observer.complete();
  return {
     unsubscribe(){
       console.log("unsubribe method is called");

     }
    };


}

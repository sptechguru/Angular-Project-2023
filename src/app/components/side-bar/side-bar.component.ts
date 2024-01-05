import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/service/auth-login.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  userDetails:any;
  cartItem:any = 0;
  searchTerm:any = '';
  constructor(private Login:AuthLoginService, private cart:CartService , 
    private router: Router) { }

  ngOnInit(): void {
    this.Login.userDetails.subscribe((res)=>{
      console.log('sidebar Signup.......',res);
    let userData: any = localStorage.getItem("signup");
    this.userDetails = JSON.parse(userData);
    console.log('user details', this.userDetails);
    })
    this.cart.getProdcutList().subscribe((res)=>{
      this.cartItem = res.length;
    })

  }


  logout(){
    // alert('logout Method Callled');
    localStorage.removeItem('signup');
    localStorage.clear();
    window.location.reload();
  }

  goTocartList(){
    this.router.navigate(['pages/cart']);
  }

  searchProdcuts(event:any){
   this.searchTerm = (event.target as HTMLInputElement).value;
   console.log('search Item', this.searchTerm)
   this.cart.searchBar.next(this.searchTerm)
  }

}

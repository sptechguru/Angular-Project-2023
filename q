warning: LF will be replaced by CRLF in src/app/Basic componets/gallery/gallery.component.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/Modules/pages/pages-routing.module.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/app.module.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/components/Ecommerce/prodcuts/prodcuts.component.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/components/Ecommerce/prodcuts/prodcuts.component.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/components/crud/local-storage-crud/local-storage-crud.component.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/components/side-bar/side-bar.component.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/components/side-bar/side-bar.component.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/service/cart.service.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/service/local-storage-json-server.service.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/service/newsapi.service.ts.
The file will have its original line endings in your working directory
[1mdiff --git a/src/app/Basic componets/gallery/gallery.component.html b/src/app/Basic componets/gallery/gallery.component.html[m
[1mindex 7a7657c..d3e9ed5 100644[m
[1m--- a/src/app/Basic componets/gallery/gallery.component.html[m	
[1m+++ b/src/app/Basic componets/gallery/gallery.component.html[m	
[36m@@ -3,7 +3,7 @@[m
 [m
   <div class="row" >[m
 [m
[31m-  <ng-container>[m
[32m+[m[32m  <!-- <ng-container>[m
     <div  class="p-2 col-md-4 col-lg-4 col-12"*ngFor="let item of filterStatus('To Do')" >[m
       <mat-card class="example-card">[m
         <h2 class="text-center">To Do</h2>[m
[36m@@ -12,15 +12,15 @@[m
           <mat-card-subtitle>{{item?.status}} status.......</mat-card-subtitle>[m
         </mat-card-header>[m
         <mat-card-content>[m
[31m-          <!-- <p>[m
[32m+[m[32m          <p>[m
             {{item.contnent}}[m
[31m-          </p> -->[m
[32m+[m[32m          </p>[m
         </mat-card-content>[m
       </mat-card>[m
     </div>[m
[31m-  </ng-container>[m
[32m+[m[32m  </ng-container> -->[m
 [m
[31m-  [m
[32m+[m[32m<!--[m[41m   [m
   <ng-container>[m
     <div  class="p-2 col-md-4 col-lg-4 col-12"*ngFor="let item of filterStatus('In Progress')" >[m
       <mat-card class="example-card">[m
[36m@@ -30,9 +30,9 @@[m
           <mat-card-subtitle>{{item.status}}</mat-card-subtitle>[m
         </mat-card-header>[m
         <mat-card-content>[m
[31m-          <!-- <p>[m
[32m+[m[32m          <p>[m
             {{item.contnent}}[m
[31m-          </p> -->[m
[32m+[m[32m          </p>[m
         </mat-card-content>[m
       </mat-card>[m
     </div>[m
[36m@@ -48,13 +48,13 @@[m
           <mat-card-subtitle>{{item.status}}</mat-card-subtitle>[m
         </mat-card-header>[m
         <mat-card-content>[m
[31m-          <!-- <p>[m
[32m+[m[32m          <p>[m
             {{item.contnent}}[m
[31m-          </p> -->[m
[32m+[m[32m          </p>[m
         </mat-card-content>[m
       </mat-card>[m
     </div>[m
[31m-  </ng-container>[m
[32m+[m[32m  </ng-container> -->[m
 [m
 </div>[m
 [m
[1mdiff --git a/src/app/Modules/pages/pages-routing.module.ts b/src/app/Modules/pages/pages-routing.module.ts[m
[1mindex 7dc98ce..df48df3 100644[m
[1m--- a/src/app/Modules/pages/pages-routing.module.ts[m
[1m+++ b/src/app/Modules/pages/pages-routing.module.ts[m
[36m@@ -13,17 +13,20 @@[m [mimport { PostComponent } from 'src/app/Basic componets/post/post.component';[m
 import { PropertyDetailsComponent } from 'src/app/Basic componets/property-details/property-details.component';[m
 import { BuilderFeaturesComponent } from 'src/app/components/Builder-Task/builder-features/builder-features.component';[m
 import { BuilderSelectorComponent } from 'src/app/components/Builder-Task/builder-selector/builder-selector.component';[m
[31m-import { CartsComponent } from 'src/app/components/Ecommerce/carts/carts.component';[m
[32m+[m[32mimport { CartListComponent } from 'src/app/components/Ecommerce/cart-list/cart-list.component';[m
[32m+[m[32mimport { ProdcutDetailsComponent } from 'src/app/components/Ecommerce/prodcut-details/prodcut-details.component';[m
 import { ProdcutsComponent } from 'src/app/components/Ecommerce/prodcuts/prodcuts.component';[m
 import { LocalStorageCrudComponent } from 'src/app/components/crud/local-storage-crud/local-storage-crud.component';[m
 import { DashbordsComponent } from 'src/app/components/dashbords/dashbords.component';[m
 import { NewsitemComponent } from 'src/app/components/newsitem/newsitem.component';[m
 import { TaskComponent } from 'src/app/components/task/task.component';[m
 [m
[32m+[m
 const routes: Routes = [[m
   { path: 'home', component: ProdcutsComponent },[m
   { path: 'dashbords', component: DashbordsComponent },[m
[31m-  { path: 'cart', component: CartsComponent },[m
[32m+[m[32m  { path: 'cart', component: CartListComponent },[m
[32m+[m[32m  { path: 'details/:id', component: ProdcutDetailsComponent },[m
   { path: 'news', component: NewsitemComponent },[m
   { path: 'homes', component: HomeComponent },[m
   { path: 'about', component: AboutComponent },[m
[36m@@ -40,8 +43,6 @@[m [mconst routes: Routes = [[m
   { path: 'local-server', component: LocalStorageCrudComponent },[m
   { path: 'builder-fixture', component: BuilderFeaturesComponent },[m
   { path: 'builder-selection', component: BuilderSelectorComponent },[m
[31m-[m
[31m-[m
 ];[m
 [m
 @NgModule({[m
[1mdiff --git a/src/app/app-routing.module.ts b/src/app/app-routing.module.ts[m
[1mindex 0f29116..2976515 100644[m
[1m--- a/src/app/app-routing.module.ts[m
[1m+++ b/src/app/app-routing.module.ts[m
[36m@@ -28,11 +28,9 @@[m [mconst routes: Routes = [[m
   {[m
     path:'user',loadChildren:()=>import('./user/user.module')[m
     .then(mod=>mod.UserModule)[m
[31m-  },[m
[31m-  [m
[32m+[m[32m  },[m[41m  [m
   {path: '**',  component: PageNotfoundComponent},[m
 [m
[31m-[m
 ];[m
 [m
 @NgModule({[m
[1mdiff --git a/src/app/app.module.ts b/src/app/app.module.ts[m
[1mindex d0cdd59..0a61b17 100644[m
[1m--- a/src/app/app.module.ts[m
[1m+++ b/src/app/app.module.ts[m
[36m@@ -1,6 +1,5 @@[m
 import { NewsitemComponent } from './components/newsitem/newsitem.component';[m
 import { ProdcutsComponent } from './components/Ecommerce/prodcuts/prodcuts.component';[m
[31m-import { CartsComponent } from './components/Ecommerce/carts/carts.component';[m
 import { CrudComponent } from './Basic componets/crud/crud.component';[m
 import { TestappService } from './testapp.service';[m
 import { BrowserModule } from '@angular/platform-browser';[m
[36m@@ -56,6 +55,9 @@[m [mimport { MaterialModule } from './Modules/materials/materials.module';[m
 import { LocalStorageCrudComponent } from './components/crud/local-storage-crud/local-storage-crud.component';[m
 import { BuilderFeaturesComponent } from './components/Builder-Task/builder-features/builder-features.component';[m
 import { BuilderSelectorComponent } from './components/Builder-Task/builder-selector/builder-selector.component';[m
[32m+[m[32mimport { ProdcutDetailsComponent } from './components/Ecommerce/prodcut-details/prodcut-details.component';[m
[32m+[m[32mimport { CheckoutComponent } from './components/Ecommerce/checkout/checkout.component';[m
[32m+[m[32mimport { SearcTermPipe } from './Modules/pages/searc-term.pipe';[m
 // import { NgChartsModule } from 'ng2-charts';[m
 [m
 [m
[36m@@ -86,7 +88,6 @@[m [mimport { BuilderSelectorComponent } from './components/Builder-Task/builder-sele[m
     CustobsComponent,[m
     PropertyDetailsComponent,[m
     NewSidbarComponent,[m
[31m-    CartsComponent,[m
     ProdcutsComponent,[m
     NewsitemComponent,[m
     DashbordsComponent,[m
[36m@@ -99,7 +100,10 @@[m [mimport { BuilderSelectorComponent } from './components/Builder-Task/builder-sele[m
     Demo2Component,[m
     LocalStorageCrudComponent,[m
     BuilderFeaturesComponent,[m
[31m-    BuilderSelectorComponent[m
[32m+[m[32m    BuilderSelectorComponent,[m
[32m+[m[32m    ProdcutDetailsComponent,[m
[32m+[m[32m    CheckoutComponent,[m
[32m+[m[32m    SearcTermPipe[m
 [m
   ],[m
   imports: [[m
[36m@@ -110,7 +114,6 @@[m [mimport { BuilderSelectorComponent } from './components/Builder-Task/builder-sele[m
     ReactiveFormsModule,[m
     HttpClientModule,[m
     FlexLayoutModule,[m
[31m-    BrowserModule,[m
     AgGridModule.withComponents([]),[m
     NgxQRCodeModule,[m
     NgSearchFilterModule,[m
[1mdiff --git a/src/app/components/Ecommerce/carts/carts.component.css b/src/app/components/Ecommerce/carts/carts.component.css[m
[1mdeleted file mode 100644[m
[1mindex db1bfb4..0000000[m
[1m--- a/src/app/components/Ecommerce/carts/carts.component.css[m
[1m+++ /dev/null[m
[36m@@ -1,4 +0,0 @@[m
[31m-.bgimg img {[m
[31m-  width:100%;[m
[31m-  height: 100px;[m
[31m-}[m
[1mdiff --git a/src/app/components/Ecommerce/carts/carts.component.html b/src/app/components/Ecommerce/carts/carts.component.html[m
[1mdeleted file mode 100644[m
[1mindex 322454e..0000000[m
[1m--- a/src/app/components/Ecommerce/carts/carts.component.html[m
[1m+++ /dev/null[m
[36m@@ -1,39 +0,0 @@[m
[31m-[m
[31m-<section class="container-fluid">[m
[31m-  <table class="table table-light">[m
[31m-    <thead>[m
[31m-      <tr>[m
[31m-        <th scope="col">ID</th>[m
[31m-        <th scope="col">Prodcut pic</th>[m
[31m-        <th scope="col">Prodcut name</th>[m
[31m-        <th scope="col">Price</th>[m
[31m-        <th scope="col">Quntity</th>[m
[31m-        <th scope="col">Total</th>[m
[31m-        <th scope="col">Action</th>[m
[31m-      </tr>[m
[31m-    </thead>[m
[31m-    <tbody>[m
[31m-      <tr *ngFor="let pro of procutlist; let i =index;">[m
[31m-        <td>{{pro.id}}</td>[m
[31m-        <td class="bgimg">[m
[31m-          <a href="{{pro.image}}" style="cursor: pointer;">[m
[31m-          <img class="img-fluid img-reponsive img-thumbnail rounded mx-auto d-block" src="{{pro.image}}" /> </a>[m
[31m-        </td>[m
[31m-        <td>{{pro.title}}</td>[m
[31m-        <td>RS.{{pro.price}}</td>[m
[31m-        <td>RS.{{pro.rating.count}}</td>[m
[31m-        <td>Total</td>[m
[31m-        <td>[m
[31m-          <button type="button" class="btn btn-danger btn-md btn-sm">Delete</button>[m
[31m-[m
[31m-        </td>[m
[31m-[m
[31m-[m
[31m-      </tr>[m
[31m-    </tbody>[m
[31m-[m
[31m-  </table>[m
[31m-  <!-- <button type="button" class="btn btn-danger btn-md btn-block mx-3">Clear cart</button>[m
[31m-  <button type="button" class="btn btn-success btn-md btn-block">Paymnet</button> -->[m
[31m-[m
[31m-</section>[m
[1mdiff --git a/src/app/components/Ecommerce/carts/carts.component.spec.ts b/src/app/components/Ecommerce/carts/carts.component.spec.ts[m
[1mdeleted file mode 100644[m
[1mindex 483b163..0000000[m
[1m--- a/src/app/components/Ecommerce/carts/carts.component.spec.ts[m
[1m+++ /dev/null[m
[36m@@ -1,25 +0,0 @@[m
[31m-import { ComponentFixture, TestBed } from '@angular/core/testing';[m
[31m-[m
[31m-import { CartsComponent } from './carts.component';[m
[31m-[m
[31m-describe('CartsComponent', () => {[m
[31m-  let component: CartsComponent;[m
[31m-  let fixture: ComponentFixture<CartsComponent>;[m
[31m-[m
[31m-  beforeEach(async () => {[m
[31m-    await TestBed.configureTestingModule({[m
[31m-      declarations: [ CartsComponent ][m
[31m-    })[m
[31m-    .compileComponents();[m
[31m-  });[m
[31m-[m
[31m-  beforeEach(() => {[m
[31m-    fixture = TestBed.createComponent(CartsComponent);[m
[31m-    component = fixture.componentInstance;[m
[31m-    fixture.detectChanges();[m
[31m-  });[m
[31m-[m
[31m-  it('should create', () => {[m
[31m-    expect(component).toBeTruthy();[m
[31m-  });[m
[31m-});[m
[1mdiff --git a/src/app/components/Ecommerce/carts/carts.component.ts b/src/app/components/Ecommerce/carts/carts.component.ts[m
[1mdeleted file mode 100644[m
[1mindex d33df2e..0000000[m
[1m--- a/src/app/components/Ecommerce/carts/carts.component.ts[m
[1m+++ /dev/null[m
[36m@@ -1,28 +0,0 @@[m
[31m-import { CartService } from './../../../service/cart.service';[m
[31m-import { Component, OnInit } from '@angular/core';[m
[31m-[m
[31m-@Component({[m
[31m-  selector: 'app-carts',[m
[31m-  templateUrl: './carts.component.html',[m
[31m-  styleUrls: ['./carts.component.css'][m
[31m-})[m
[31m-export class CartsComponent implements OnInit {[m
[31m-[m
[31m-  procutlist:any = [];[m
[31m-[m
[31m-  constructor(private api:CartService) { }[m
[31m-[m
[31m-  ngOnInit(): void {[m
[31m-    this.getProList();[m
[31m-  }[m
[31m-[m
[31m-  getProList(){[m
[31m-    this.api.getProdcuts().subscribe((res:any)=>{[m
[31m-      console.log(res);[m
[31m-      this.procutlist = res;[m
[31m-      console.log(this.procutlist);[m
[31m-[m
[31m-    })[m
[31m-  }[m
[31m-[m
[31m-}[m
[1mdiff --git a/src/app/components/Ecommerce/prodcuts/prodcuts.component.html b/src/app/components/Ecommerce/prodcuts/prodcuts.component.html[m
[1mindex dae6c2b..fafcb7c 100644[m
[1m--- a/src/app/components/Ecommerce/prodcuts/prodcuts.component.html[m
[1m+++ b/src/app/components/Ecommerce/prodcuts/prodcuts.component.html[m
[36m@@ -1,7 +1,9 @@[m
[31m-<section class="container-fluid py-3">[m
[32m+[m[32m<section class="container-fluid">[m
   <div class="row">[m
 [m
[31m-    <div class="col-md-4 col-lg-4 col-12" *ngFor="let pro of procutlist; let i =index;">[m
[32m+[m[32m    <div class="col-md-4 col-lg-4 col-12" *ngFor="let pro of procutlist | searcTerm:serachKey:'title'">[m
[32m+[m[32m    <!-- <div class="col-md-4 col-lg-4 col-12" *ngFor="let pro of procutlist"> -->[m
[32m+[m
       <div class="bgimg card shadow-lg p-3 mb-5 bg-body rounded" >[m
         <a href="{{pro?.image}}" target="_blank" style="cursor: pointer;">[m
         <img class="card-img-top img-fluid img-reponsive rounded mx-auto d-block" src="{{pro?.image}}" alt="Card image cap">[m
[36m@@ -18,11 +20,11 @@[m
           <p class="card-text font-weight-bold">  <i class="fa-solid fa-indian-rupee-sign text-danger">&nbsp;&nbsp;{{pro?.price}}</i></p>[m
           <p class="card-text"> {{pro?.description | slice:0:80}}</p>[m
 [m
[31m-        <button routerLink="/pages/cart" type="button" class="btn btn-primary btn-md">[m
[31m-          <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Cart</button>[m
[32m+[m[32m        <button (click)="addCart(pro)" type="button" class="btn btn-primary btn-md">[m
[32m+[m[32m          <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Add To Cart</button>[m
 [m
[31m-        <button routerLink="/pages/cart" type="button" class="btn btn-success btn-md mx-3 text-white">[m
[31m-          <i class="fas fa-eye"></i>&nbsp;&nbsp;View</button>[m
[32m+[m[32m        <button [routerLink]="['/pages/details/'+pro.id]" type="button" class="btn btn-success btn-md mx-3 text-white">[m
[32m+[m[32m          <i class="fas fa-eye"></i>&nbsp;&nbsp;View Prodcut</button>[m
         </div>[m
 [m
       </div>[m
[1mdiff --git a/src/app/components/Ecommerce/prodcuts/prodcuts.component.ts b/src/app/components/Ecommerce/prodcuts/prodcuts.component.ts[m
[1mindex e1bcc3b..f37a0ce 100644[m
[1m--- a/src/app/components/Ecommerce/prodcuts/prodcuts.component.ts[m
[1m+++ b/src/app/components/Ecommerce/prodcuts/prodcuts.component.ts[m
[36m@@ -9,11 +9,16 @@[m [mimport { Component, OnInit } from '@angular/core';[m
 export class ProdcutsComponent implements OnInit {[m
 [m
   procutlist:any = [];[m
[32m+[m[32m  serachKey : any = '';[m
 [m
   constructor(private api:CartService) { }[m
 [m
   ngOnInit(): void {[m
     this.getProList();[m
[32m+[m[32m    this.api.searchBar.subscribe((res)=>{[m
[32m+[m[32m      this.serachKey = res;[m
[32m+[m[32m      console.log('search Prodcuts ', this.serachKey);[m
[32m+[m[32m    })[m
   }[m
 [m
   getProList(){[m
[36m@@ -21,8 +26,15 @@[m [mexport class ProdcutsComponent implements OnInit {[m
       console.log(res);[m
       this.procutlist = res;[m
       console.log(this.procutlist);[m
[31m-[m
[32m+[m[32m    }, error=>{[m
[32m+[m[32m      console.log(error);[m
     })[m
   }[m
 [m
[32m+[m
[32m+[m[32m  addCart(item:any){[m
[32m+[m[32m    this.api.addtoCart(item);[m
[32m+[m[32m    // console.log('cart item of ', item);[m
[32m+[m[32m  }[m
[32m+[m
 }[m
[1mdiff --git a/src/app/components/crud/local-storage-crud/local-storage-crud.component.ts b/src/app/components/crud/local-storage-crud/local-storage-crud.component.ts[m
[1mindex 54a211e..4fd976e 100644[m
[1m--- a/src/app/components/crud/local-storage-crud/local-storage-crud.component.ts[m
[1m+++ b/src/app/components/crud/local-storage-crud/local-storage-crud.component.ts[m
[36m@@ -38,11 +38,10 @@[m [mexport class LocalStorageCrudComponent implements OnInit {[m
   }[m
 [m
   getEmp_list() {[m
[31m-    this.api.getMethod().subscribe((res) => {[m
[32m+[m[32m    this.api.getMethod().subscribe((res)=>{[m
       this.empList = res;[m
[31m-      console.log(this.empList);[m
[31m-    }, error => {[m
[31m-      console.log(error);[m
[32m+[m[32m    }, error=>{[m
[32m+[m[32m      console.log('error', error)[m
     })[m
   }[m
 [m
[1mdiff --git a/src/app/components/side-bar/side-bar.component.html b/src/app/components/side-bar/side-bar.component.html[m
[1mindex f7557f4..49b964b 100644[m
[1m--- a/src/app/components/side-bar/side-bar.component.html[m
[1m+++ b/src/app/components/side-bar/side-bar.component.html[m
[36m@@ -8,10 +8,26 @@[m
         <i class="material-icons">menu</i>[m
       </button>[m
       <span class="user-text">SP_ANGULAR_PRO</span>[m
[32m+[m
[32m+[m[32m      <div class="mx-5">[m
[32m+[m[32m        <mat-form-field appearance="fill" >[m
[32m+[m[32m          <!-- <mat-label>Search Prodcut</mat-label> -->[m
[32m+[m[32m          <input matInput [(ngModel)]="searchTerm" (keyup)="searchProdcuts($event)" placeholder="search Prodcuts ..">[m
[32m+[m[32m        </mat-form-field>[m
[32m+[m[32m      </div>[m
[32m+[m[41m  [m
[32m+[m[41m        [m
       <span class="example-fill-remaining-space"></span>[m
       Welcome : <span class="user-text font-weight-bold text-capitalize text-primary"> {{userDetails[0].firstName}} {{userDetails[0].lastName}}</span>[m
[32m+[m[41m    [m
       <button class="btn btn-md btn-danger mx-2" (click)="logout()"> Logout</button> [m
[31m-      <!-- <button class="btn btn-md btn-danger mx-2" routerLink="/signup">Singup</button>[m
[32m+[m[41m     [m
[32m+[m[32m      <button class="btn btn-md btn-dark" (click)="goTocartList()">[m[41m [m
[32m+[m[32m        <i class="fas fa-shopping-cart fa-2x"></i>[m
[32m+[m[32m      <span class="badge badge-success">{{cartItem}}</span>[m
[32m+[m[32m      </button>[m[41m [m
[32m+[m
[32m+[m[32m      <!-- <button class="btn btn-md btn-danger mx-2" routerLink="/signup">Singup</button/>[m
       <button class="btn btn-md btn-success mx-2" routerLink="/login"> Login</button> -->[m
     </mat-toolbar>[m
     <div class="main-cont">[m
[1mdiff --git a/src/app/components/side-bar/side-bar.component.ts b/src/app/components/side-bar/side-bar.component.ts[m
[1mindex 2f0f3d7..4aeb5cd 100644[m
[1m--- a/src/app/components/side-bar/side-bar.component.ts[m
[1m+++ b/src/app/components/side-bar/side-bar.component.ts[m
[36m@@ -1,5 +1,7 @@[m
 import { Component, OnInit } from '@angular/core';[m
[32m+[m[32mimport { Router } from '@angular/router';[m
 import { AuthLoginService } from 'src/app/service/auth-login.service';[m
[32m+[m[32mimport { CartService } from 'src/app/service/cart.service';[m
 [m
 @Component({[m
   selector: 'app-side-bar',[m
[36m@@ -8,7 +10,10 @@[m [mimport { AuthLoginService } from 'src/app/service/auth-login.service';[m
 })[m
 export class SideBarComponent implements OnInit {[m
   userDetails:any;[m
[31m-  constructor(private Login:AuthLoginService) { }[m
[32m+[m[32m  cartItem:any = 0;[m
[32m+[m[32m  searchTerm:any = '';[m
[32m+[m[32m  constructor(private Login:AuthLoginService, private cart:CartService ,[m[41m [m
[32m+[m[32m    private router: Router) { }[m
 [m
   ngOnInit(): void {[m
     this.Login.userDetails.subscribe((res)=>{[m
[36m@@ -17,13 +22,28 @@[m [mexport class SideBarComponent implements OnInit {[m
     this.userDetails = JSON.parse(userData);[m
     console.log('user details', this.userDetails);[m
     })[m
[32m+[m[32m    this.cart.getProdcutList().subscribe((res)=>{[m
[32m+[m[32m      this.cartItem = res.length;[m
[32m+[m[32m    })[m
[32m+[m
   }[m
 [m
[32m+[m
   logout(){[m
[31m-    alert('logout Method Callled');[m
[32m+[m[32m    // alert('logout Method Callled');[m
     localStorage.removeItem('signup');[m
     localStorage.clear();[m
     window.location.reload();[m
   }[m
 [m
[32m+[m[32m  goTocartList(){[m
[32m+[m[32m    this.router.navigate(['pages/cart']);[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  searchProdcuts(event:any){[m
[32m+[m[32m   this.searchTerm = (event.target as HTMLInputElement).value;[m
[32m+[m[32m   console.log('search Item', this.searchTerm)[m
[32m+[m[32m   this.cart.searchBar.next(this.searchTerm)[m
[32m+[m[32m  }[m
[32m+[m
 }[m
[1mdiff --git a/src/app/service/cart.service.ts b/src/app/service/cart.service.ts[m
[1mindex 22c763d..09bb8e1 100644[m
[1m--- a/src/app/service/cart.service.ts[m
[1m+++ b/src/app/service/cart.service.ts[m
[36m@@ -1,16 +1,64 @@[m
 import { HttpClient } from '@angular/common/http';[m
 import { Injectable } from '@angular/core';[m
[32m+[m[32mimport { greet } from './../Basic componets/arrar &str/greet';[m
[32m+[m[32mimport { BehaviorSubject } from 'rxjs';[m
[32m+[m[32mimport { map } from 'rxjs/operators';[m
 [m
 @Injectable({[m
   providedIn: 'root'[m
 })[m
 export class CartService {[m
[32m+[m[32m  readonly apiBaseUrl = "https://fakestoreapi.com/products";[m
 [m
[31m-  readonly url =  "https://fakestoreapi.com/products"[m
[32m+[m[32m  public cartItemsList: any = [];[m
[32m+[m[32m  public productList = new BehaviorSubject<any>([]);[m
[32m+[m[32m  public searchBar = new BehaviorSubject<string>('');[m
 [m
[31m-  constructor(private http:HttpClient) { }[m
[32m+[m[32m  constructor(private http: HttpClient) { }[m
 [m
[31m-  getProdcuts(){[m
[31m-   return this.http.get(this.url);[m
[32m+[m[32m  getProdcutList() {[m
[32m+[m[32m    return this.productList.asObservable();[m
   }[m
[32m+[m
[32m+[m[32m  setProductsList(product: any) {[m
[32m+[m[32m    this.cartItemsList.push(...product);[m
[32m+[m[32m    this.productList.next(product);[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  addtoCart(product: any) {[m
[32m+[m[32m    this.cartItemsList.push(product);[m
[32m+[m[32m    this.productList.next(this.cartItemsList);[m
[32m+[m[32m    // this.getTotalPrice();[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  getTotalPrice(): number {[m
[32m+[m[32m    let grandtotal = 0;[m
[32m+[m[32m    this.cartItemsList.map((a: any) => {[m
[32m+[m[32m      grandtotal += a.total;[m
[32m+[m[32m    })[m
[32m+[m[32m    return grandtotal;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  removeCartItem(product: any) {[m
[32m+[m[32m    this.cartItemsList.map((a: any, index: any) => {[m
[32m+[m[32m      if (product.id === a.id) {[m
[32m+[m[32m        this.cartItemsList.splice(index, 1);[m
[32m+[m[32m      }[m
[32m+[m[32m    })[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  removeAllCart() {[m
[32m+[m[32m    this.cartItemsList = [];[m
[32m+[m[32m    this.productList.next(this.cartItemsList);[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m
[32m+[m[32m  getProdcuts() {[m
[32m+[m[32m    return this.http.get(this.apiBaseUrl);[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  getProdcutDetails(id: any) {[m
[32m+[m[32m    return this.http.get(this.apiBaseUrl + '/' + id);[m
[32m+[m[32m  }[m
[32m+[m
 }[m
[1mdiff --git a/src/app/service/local-storage-json-server.service.ts b/src/app/service/local-storage-json-server.service.ts[m
[1mindex 6ed1ea2..221acc2 100644[m
[1m--- a/src/app/service/local-storage-json-server.service.ts[m
[1m+++ b/src/app/service/local-storage-json-server.service.ts[m
[36m@@ -15,7 +15,6 @@[m [mexport class LocalStorageJsonServerService {[m
 [m
   constructor(private http:HttpClient) { }[m
 [m
[31m-[m
   getMethod(): Observable<Employee>{[m
     return this.http.get<Employee>(this.apiUrl);[m
   }[m
[36m@@ -45,7 +44,6 @@[m [mexport class LocalStorageJsonServerService {[m
 [m
 [m
   errorHandling(error:HttpErrorResponse){[m
[31m-[m
     if(error.error instanceof ErrorEvent){[m
       console.error(`An Error Occured ${error.error.message}`)[m
     }[m
[36m@@ -55,6 +53,6 @@[m [mexport class LocalStorageJsonServerService {[m
         `body was: ${error.error}`);[m
     }[m
     return throwError([m
[31m-      'Something bad happened; please try again later.');[m
[31m-  };[m
[32m+[m[32m      'Something bad happened please try again later.');[m
[32m+[m[32m  }[m
 }[m
[1mdiff --git a/src/app/service/newsapi.service.ts b/src/app/service/newsapi.service.ts[m
[1mindex d700dda..9735d25 100644[m
[1m--- a/src/app/service/newsapi.service.ts[m
[1m+++ b/src/app/service/newsapi.service.ts[m
[36m@@ -9,12 +9,9 @@[m [mimport { Injectable } from '@angular/core';[m
 export class NewsapiService {[m
 [m
 // Your API key is: db9b6a7bd1de49f0a7dd8748c0d76d70[m
[31m-[m
   public baseURL = environment.Newsapi;[m
[31m-[m
   public baseURL2 = environment.busines;[m
 [m
[31m-[m
   constructor(private http: HttpClient) {}[m
 [m
 [m

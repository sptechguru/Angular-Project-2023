import { NewsitemComponent } from './components/newsitem/newsitem.component';
import { ProdcutsComponent } from './components/Ecommerce/prodcuts/prodcuts.component';
import { CartsComponent } from './components/Ecommerce/carts/carts.component';
import { CrudComponent } from './Basic componets/crud/crud.component';
import { TestappService } from './testapp.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Basic componets/home/home.component';
import { AboutComponent } from './Basic componets/about/about.component';
import { ContactComponent } from './Basic componets/contact/contact.component';
import { PageNotfoundComponent } from './Basic componets/page-notfound/page-notfound.component';
import { NavbarComponent } from './Basic componets/navbar/navbar.component';
import { GalleryComponent } from './Basic componets/gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './Basic componets/signup-form/signup-form.component';
import { MapComponent } from './Basic componets/map/map.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Child1Component } from './Basic componets/child1/child1.component';
import { Child2Component } from './Basic componets/child2/child2.component';
import { PostComponent } from './Basic componets/post/post.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './Basic componets/footer/footer.component';
import { SidenabarComponent } from './Basic componets/sidenabar/sidenabar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GridsystemComponent } from './Basic componets/gridsystem/gridsystem.component';
import {AgGridModule} from 'ag-grid-angular';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { DyncompoComponent } from './Basic componets/dyncompo/dyncompo.component';
import { HicomponentComponent } from './Basic componets/hicomponent/hicomponent.component';
import { HelloComponent } from './Basic componets/hello/hello.component';
import { GoodbyeComponent } from './Basic componets/goodbye/goodbye.component';

//that is Dynamic components using
import { ParentinfoComponent } from './Basic componets/parentinfo/parentinfo.component';
import { ChildinfoComponent } from './Basic componets/childinfo/childinfo.component';
import { CustobsComponent } from './Basic componets/custobs/custobs.component';
import { PropertyDetailsComponent } from './Basic componets/property-details/property-details.component';
// import { HandlersAuthInterceptor } from './Interceptor/handlers-auth.interceptor';
import { NewSidbarComponent } from './Basic componets/new-sidbar/new-sidbar.component';
import {MatListModule} from '@angular/material/list';
import { DashbordsComponent } from './components/dashbords/dashbords.component';
import { NgSearchFilterModule } from 'ng-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { SignupComponent } from './components/signup/signup.component';
import { LoginsComponent } from './components/logins/logins.component';
import { ForgetComponent } from './components/forget/forget.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TaskComponent } from './components/task/task.component';
import { DemoComponent } from './Basic componets/demo/demo.component';
import { Demo2Component } from './Basic componets/demo2/demo2.component';
import { MaterialModule } from './Modules/materials/materials.module';
import { LocalStorageCrudComponent } from './components/crud/local-storage-crud/local-storage-crud.component';
// import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotfoundComponent,
    NavbarComponent,
    GalleryComponent,
    SignupFormComponent,
    MapComponent,
    CrudComponent,
    Child1Component,
    Child2Component,
    PostComponent,
    FooterComponent,
    SidenabarComponent,
    GridsystemComponent,
    DyncompoComponent,
    HicomponentComponent,
    HelloComponent,
    GoodbyeComponent,
    ParentinfoComponent,
    ChildinfoComponent,
    CustobsComponent,
    PropertyDetailsComponent,
    NewSidbarComponent,
    CartsComponent,
    ProdcutsComponent,
    NewsitemComponent,
    DashbordsComponent,
    SignupComponent,
    LoginsComponent,
    ForgetComponent,
    SideBarComponent,
    TaskComponent,
    DemoComponent,
    Demo2Component,
    LocalStorageCrudComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserModule,
    AgGridModule.withComponents([]),
    NgxQRCodeModule,
    NgSearchFilterModule,
    NgxPaginationModule,
    MaterialModule

  ],

  //providers is using Dependecy injection for
  // as working in service delvers and all logic is here services
  //Component data send to providers are two types component level module html

  providers: [TestappService],
  bootstrap: [AppComponent],
  entryComponents: [ChildinfoComponent,ParentinfoComponent]
})
export class AppModule { }

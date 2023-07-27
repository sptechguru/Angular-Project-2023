import { LoginpageComponent } from './loginpage/loginpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagelistComponent } from './pagelist/pagelist.component';

const routes: Routes = [
  {path: 'uplogin',  component:LoginpageComponent },
  {path: 'uplist',  component:PagelistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

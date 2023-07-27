
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './Basic componets/page-notfound/page-notfound.component';
import { LoginsComponent } from './components/logins/logins.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetComponent } from './components/forget/forget.component';
import { AuthGuards } from './auth/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component:LoginsComponent },
  {path: 'signup', component:SignupComponent },
  {path: 'forget', component:ForgetComponent },
  
  // That is admin Module is LazyLoading concepts
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },

  {
    path:'pages',loadChildren:()=>import('./Modules/pages/pages.module')
    .then(mod=>mod.PagesModule)
    // ,canActivate:[AuthGuards]
  },
  {
    path:'user',loadChildren:()=>import('./user/user.module')
    .then(mod=>mod.UserModule)
  },
  
  {path: '**',  component: PageNotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }

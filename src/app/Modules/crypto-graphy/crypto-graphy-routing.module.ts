import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinDetailsComponent } from 'src/app/components/Crypto/coin-details/coin-details.component';
import { CoinListComponent } from 'src/app/components/Crypto/coin-list/coin-list.component';


const routes: Routes = [
  // {path:"" , redirectTo:"/coin-list",pathMatch:"full"},
  {path:"coin-list", component:CoinListComponent},
  {path:"coin-details/:id", component:CoinDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoGraphyRoutingModule { }

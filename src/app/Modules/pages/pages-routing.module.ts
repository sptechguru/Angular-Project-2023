import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/Basic componets/about/about.component';
import { ContactComponent } from 'src/app/Basic componets/contact/contact.component';
import { CrudComponent } from 'src/app/Basic componets/crud/crud.component';
import { CustobsComponent } from 'src/app/Basic componets/custobs/custobs.component';
import { DyncompoComponent } from 'src/app/Basic componets/dyncompo/dyncompo.component';
import { GalleryComponent } from 'src/app/Basic componets/gallery/gallery.component';
import { GridsystemComponent } from 'src/app/Basic componets/gridsystem/gridsystem.component';
import { HomeComponent } from 'src/app/Basic componets/home/home.component';
import { MapComponent } from 'src/app/Basic componets/map/map.component';
import { PostComponent } from 'src/app/Basic componets/post/post.component';
import { PropertyDetailsComponent } from 'src/app/Basic componets/property-details/property-details.component';
import { CartsComponent } from 'src/app/components/Ecommerce/carts/carts.component';
import { ProdcutsComponent } from 'src/app/components/Ecommerce/prodcuts/prodcuts.component';
import { LocalStorageCrudComponent } from 'src/app/components/crud/local-storage-crud/local-storage-crud.component';
import { DashbordsComponent } from 'src/app/components/dashbords/dashbords.component';
import { NewsitemComponent } from 'src/app/components/newsitem/newsitem.component';
import { TaskComponent } from 'src/app/components/task/task.component';

const routes: Routes = [
  { path: 'home', component: ProdcutsComponent },
  { path: 'dashbords', component: DashbordsComponent },
  { path: 'cart', component: CartsComponent },
  { path: 'news', component: NewsitemComponent },
  { path: 'homes', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'map', component: MapComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'post', component: PostComponent },
  { path: 'grid', component: GridsystemComponent },
  { path: 'dynamic', component: DyncompoComponent },
  { path: 'cusobs', component: CustobsComponent },
  { path: 'propde', component: PropertyDetailsComponent },
  { path: 'task', component: TaskComponent },
  { path: 'local-server', component: LocalStorageCrudComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

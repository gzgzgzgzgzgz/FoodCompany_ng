import { AboutComponent } from './../about/about.component';
import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path: 'menu',  component: MenuComponent },
    { path: 'home',  component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'contactus', component:ContactComponent},
    {path: 'dishdetail/:id', component:DishdetailComponent},
    {path: 'about', component: AboutComponent}
];